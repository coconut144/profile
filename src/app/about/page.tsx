import SkillBadge from "@/app/components/skillbadge";

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "PostgreSQL", "Git"];

const info = [
  { label: "Email", value: "thitimaampawa@gmail.com" },
  { label: "GitHub", value: "https://github.com/coconut144" },
//   { label: "LinkedIn", value: "linkedin.com/in/thitima" },
  { label: "ตั้งอยู่", value: "Bongkok, Thailand" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        {/* Left column */}
        <div>
          <div className="w-20 h-20 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-700 dark:text-violet-300 font-semibold text-xl mb-4">
            TA
          </div>
          <div className="space-y-3">
            {info.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-zinc-400">{item.label}</p>
                <p className="text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">เกี่ยวกับฉัน</h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            สวัสดีค่ะ! ฉันชื่อ องุ่น มีความสมสนใจด้านการเป็นนักพัฒนาเว็บไซต์ มีประสบการณ์ 1 ปีในการพัฒนา โมบายแอพพลิเคชันและ
            เว็บแอปพลิเคชันด้วยเทคโนโลยีสมัยใหม่ และยังมีประสบการณ์ด้าน นักทดสอบซอฟต์แวร์และการทำงานร่วมกับทีมพัฒนาในโครงการต่าง ๆ 
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            ชอบงานที่ท้าทายและเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ ไม่ว่าจะเป็น
            การออกแบบ animation หรือการ optimize performance ของเว็บไซต์
          </p>

          <h2 className="text-base font-medium mb-3">ทักษะ</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}