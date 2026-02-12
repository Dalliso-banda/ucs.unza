import { authenticate } from '../middleware/auth.js';

// Only authenticated users can POST a blog
router.post('/', authenticate, async (req: any, res) => {
  const { title, content } = req.body;
  const authorId = req.user.id; // Get ID from the decoded JWT token

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

