import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import resumePhoto from '@/assets/resume-photo.jpg';

/**
 * 关于我页面
 * 展示个人信息、背景和设计理念
 */
function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            臧秀娟的设计站
          </Link>
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <Link to="/graphic-design" className="text-sm hover:text-gray-600 transition-colors">
              平面设计
            </Link>
            <Link to="/video" className="text-sm hover:text-gray-600 transition-colors">
              视频动画
            </Link>
            <Link to="/experience" className="text-sm hover:text-gray-600 transition-colors">
              工作经历
            </Link>
            <Link to="/about" className="text-sm font-bold">
              关于我
            </Link>
          </div>
        </div>
      </nav>

      {/* 返回按钮 */}
      <div className="fixed top-24 left-6 z-40">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          返回首页
        </Link>
      </div>

      {/* 主内容 */}
      <section className="min-h-screen px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* 标题 */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              臧秀娟
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600">
              UI动效 / MG动画 / 平面设计
            </p>
            <p className="text-lg text-gray-500 mt-2">
              14年设计经验
            </p>

            {/* 联系方式 */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:zangfeiyu21@126.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-gray-700 hover:bg-black hover:text-white transition-colors"
              >
                zangfeiyu21@126.com
              </a>
              <a
                href="tel:18721183215"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-gray-700 hover:bg-black hover:text-white transition-colors"
              >
                18721183215
              </a>
            </div>
          </div>

          {/* 个人简介 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">个人简介</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  我有14年设计经验,能适应不同行业的设计风格,在教育、金融、电商、体育等领域都有丰富经验。
                  擅长理解策划文案,与开发团队有效配合,推进项目顺利进行。
                </p>
                <p>
                  工作不局限于动画设计,也包括短视频剪辑、海报宣传单、画册、UI动效、PPT等日常设计,
                  也会用手绘板画图。熟练使用AIGC软件辅助日常工作,有自己完整的工作流程。
                </p>
                <p>
                  团队合作经验丰富,之前一直在中小企业任职,工作灵活多变,能够快速适应不同的项目需求。
                </p>
              </div>
            </div>

            <div className="bg-gray-100 aspect-[3/4] w-1/3 mx-auto lg:mx-0 lg:w-full flex items-center justify-center overflow-hidden">
              <img
                src={resumePhoto}
                alt="臧秀娟"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 技能专长 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">技能专长</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-2 border-black pl-6">
                <h3 className="text-xl font-bold mb-3">MG动画 & UI动效</h3>
                <p className="text-gray-600">
                  线上课程 / MG动画 / H5动效 / Banner动效 / Lottie动效
                </p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <h3 className="text-xl font-bold mb-3">视觉设计</h3>
                <p className="text-gray-600">
                  平面设计 / 海报 / 画册 / 宣传单 / PPT设计 / 插画创作
                </p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <h3 className="text-xl font-bold mb-3">视频制作</h3>
                <p className="text-gray-600">
                  视频剪辑 / 短视频 / 电商主图 / 详情页设计 / AIGC辅助
                </p>
              </div>
            </div>
          </div>

          {/* 设计理念 */}
          <div className="bg-black text-white p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              "能适应不同行业设计风格,擅长理解策划文案,与开发团队有效配合。"
            </h2>
            <p className="text-gray-400 text-lg">— 工作理念</p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-600">
              © 2024 个人作品集. 保留所有权利.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-sm text-gray-600 hover:text-black transition-colors">
                关于我
              </Link>
              <Link to="/experience" className="text-sm text-gray-600 hover:text-black transition-colors">
                工作经历
              </Link>
              <a href="mailto:hello@example.com" className="text-sm text-gray-600 hover:text-black transition-colors">
                联系方式
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
