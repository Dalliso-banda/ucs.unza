import { Router } from 'express';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';

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

export default router;

