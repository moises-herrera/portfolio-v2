export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  year: number;
  tags: {
    name: string;
    icon: (_props: Record<string, any>) => any;
  }[];
}
