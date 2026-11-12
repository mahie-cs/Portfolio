'use server';

import { siteConfig } from '@/config/site';

export type GitHubStats = {
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
  hireable: boolean | null;
  bio: string | null;
} | null;

/** Cached for 60 seconds so profile updates show up quickly while keeping rate limits safe. */
export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const res = await fetch(`https://api.github.com/users/${siteConfig.links.githubUsername}`, {
      next: { revalidate: 60 },
      headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {},
    });
    if (!res.ok) return null;
    const d = await res.json();
    return {
      public_repos: d.public_repos,
      followers: d.followers,
      following: d.following,
      company: d.company,
      location: d.location,
      hireable: d.hireable,
      bio: d.bio,
    };
  } catch {
    return null;
  }
}
