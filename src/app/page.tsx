import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* <span className="inline-block text-xs text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded-full px-3 py-1 mb-6">
          Frontend Developer
        </span> */}
        <h1 className="text-4xl font-semibold mb-3 tracking-tight">
          สวัสดีค่ะ, ฉัน<br />Thitima Ampawa
        </h1>
        <p className="text-zinc-500 text-base mb-8 leading-relaxed">
          ออกแบบและพัฒนาเว็บไซต์ด้วย Next.js และ Kotlin , Flitter<br />
         ทดสอบระบบก่อนส่งมอบ <br />
        </p>
        {/* <div className="flex gap-3 justify-center">
          <Link
            href="/portfolio"
            className="h-11 px-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium flex items-center hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            ดูผลงาน
          </Link>
          <Link
            href="/about"
            className="h-11 px-6 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm font-medium flex items-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            เกี่ยวกับฉัน
          </Link>
        </div> */}
      </div>
    </div>
  );
}