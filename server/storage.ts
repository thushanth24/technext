import { users, contacts, blogPosts, jobApplications, type User, type InsertUser, type Contact, type InsertContact, type BlogPost, type InsertBlogPost, type JobApplication, type InsertJobApplication } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplications(): Promise<JobApplication[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private blogPosts: Map<number, BlogPost>;
  private jobApplications: Map<number, JobApplication>;
  private currentUserId: number;
  private currentContactId: number;
  private currentBlogPostId: number;
  private currentJobApplicationId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.jobApplications = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentBlogPostId = 1;
    this.currentJobApplicationId = 1;

    // Initialize with sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "The Future of Smart Infrastructure: IoT Integration in Civil Engineering",
        slug: "smart-infrastructure-iot-integration",
        excerpt: "Exploring how Internet of Things (IoT) technology is revolutionizing infrastructure monitoring and maintenance in modern cities...",
        content: "Internet of Things (IoT) technology is transforming how we design, monitor, and maintain civil infrastructure. Smart sensors embedded in bridges, roads, and buildings provide real-time data on structural health, traffic patterns, and environmental conditions. This data-driven approach enables predictive maintenance, reduces costs, and improves safety. Civil engineers are now designing infrastructure with IoT integration from the ground up, creating responsive systems that can adapt to changing conditions and user needs.",
        author: "James Mitchell",
        category: "Smart Cities",
        imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      },
      {
        title: "Sustainable Design Principles for Modern Infrastructure Projects",
        slug: "sustainable-design-principles",
        excerpt: "A comprehensive guide to implementing eco-friendly practices and materials in large-scale civil engineering projects...",
        content: "Sustainable infrastructure design is no longer optional—it's essential for meeting climate goals and regulatory requirements. This article explores key principles including material selection, energy efficiency, water management, and lifecycle assessment. We examine case studies of successful green infrastructure projects and provide practical guidelines for implementing sustainable practices in design and construction phases.",
        author: "Sarah Thompson",
        category: "Sustainability",
        imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      },
      {
        title: "Digital Transformation in Construction: BIM and Drone Technology",
        slug: "digital-transformation-construction-bim-drone",
        excerpt: "How Building Information Modeling (BIM) and drone surveys are improving project accuracy and reducing construction timelines...",
        content: "The construction industry is experiencing a digital revolution with Building Information Modeling (BIM) and drone technology leading the charge. BIM enables collaborative design and clash detection before construction begins, while drones provide accurate site surveys and progress monitoring. These technologies together reduce errors, improve communication, and accelerate project delivery while maintaining high quality standards.",
        author: "Emily Chen",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      }
    ];

    samplePosts.forEach(post => {
      const id = this.currentBlogPostId++;
      const blogPost: BlogPost = {
        ...post,
        id,
        publishedAt: new Date(),
      };
      this.blogPosts.set(id, blogPost);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      publishedAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const id = this.currentJobApplicationId++;
    const application: JobApplication = {
      ...insertApplication,
      id,
      appliedAt: new Date(),
    };
    this.jobApplications.set(id, application);
    return application;
  }

  async getJobApplications(): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values()).sort((a, b) => 
      b.appliedAt.getTime() - a.appliedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
