import { Router } from 'express';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const router = Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const [newUser] = await db.insert(users).values({
      username,
      email,
      passwordHash: password, // TODO: Hash this!
    }).returning();
    
    res.status(201).json({ message: "User created", user: newUser });
  } catch (err) {
    res.status(400).json({ error: "Email or username already exists" });
  }
});




// Add to your existing auth.ts
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const [user] = await db.select().from(users).where(eq(users.email, email));

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, 'super-secret-key', { expiresIn: '1h' });
  res.json({ token, user: { id: user.id, username: user.username } });
});



export default router;

