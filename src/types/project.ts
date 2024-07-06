export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  tags: {
    name: string;
    icon: (_props: Record<string, any>) => any;
  }[];
}
