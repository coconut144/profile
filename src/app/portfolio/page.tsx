import ProjectCard from "@/app/components/projectcard";
const projects = [
  {
    title: "ผลงาน GitHub",
    description: "ระบบซื้อขายออนไลน์ครบวงจร รองรับการชำระเงินผ่าน Stripe และระบบจัดการสินค้า",
    tags: ["Next.js", "HTML", "CSS", "JavaScript","Flutter","Kotlin"],
    color: "violet" as const,
    emoji: "",
    href: "https://github.com/coconut144",
  },
  {
    title: "ผลงาน Gitlab",
    description: "แดชบอร์ดสำหรับวิเคราะห์ข้อมูล realtime พร้อมกราฟและตารางแบบ interactive",
    tags: ["React", "Chart.js", "TailwindCSS"],
    color: "teal" as const,
    emoji: "📊",
    href: "https://github.com",
  },
//   {
//     title: "Blog CMS",
//     description: "ระบบจัดการบทความที่รองรับ Markdown และ MDX พร้อม SEO optimization",
//     tags: ["Next.js", "MDX", "Contentlayer"],
//     color: "amber" as const,
//     emoji: "📝",
//     href: "https://github.com",
//   },
//   {
//     title: "Chat Application",
//     description: "แอปพลิเคชันแชทแบบ realtime รองรับ room และ direct message",
//     tags: ["Socket.io", "Node.js", "React"],
//     color: "coral" as const,
//     emoji: "💬",
//     href: "https://github.com",
//   },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold mb-2">ผลงาน</h1>
      <p className="text-zinc-500 mb-8 text-sm">โปรเจกต์ที่ฉันภูมิใจและได้พัฒนาขึ้น</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}