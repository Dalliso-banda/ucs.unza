import { Router } from 'express';
import { db } from '../db/index.js';
import { blogs } from '../db/schema.js';
import { eq } from 'drizzle-orm';

const router = Router();

// Create a blog post
router.post('/', async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const [newPost] = await db.insert(blogs).values({
      title,
      content,
      authorId,
    }).returning();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Get all published blogs
router.get('/', async (req, res) => {
  const allBlogs = await db.select().from(blogs).where(eq(blogs.published, true));
  res.json(allBlogs);
});

export default router;

