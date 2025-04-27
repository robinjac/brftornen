export type WordpressBase = {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Record<string, any>;
  class_list: string[];
  _links: Record<string, any>;
};

export type WordpressPage = WordpressBase & {
  parent: number;
  menu_order: number;
};

export type WordpressPost = WordpressBase & {
  sticky: boolean;
  format: string;
  categories: number[];
  tags: number[];
};
