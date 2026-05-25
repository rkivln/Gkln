/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  imageUrl?: string;
  link?: string;
  bgGradient: string;
}

export interface BentoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  visualType: "console" | "gradient" | "bezier" | "list" | "card";
  detailsList?: string[];
  glowingColor?: string;
  accentText?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  cardColor: "red" | "amber" | "white";
  category: string;
  badge?: string;
  imageUrl?: string;
}

export interface ProfileSlide {
  id: string;
  name: string;
  role: string;
  tagline: string;
  facts: string[];
  signature: string;
  avatarBgColor: string;
}
