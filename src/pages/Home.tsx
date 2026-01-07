import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';
import ipNewImage from '@/assets/ip-new.png';
import ipNew2Image from '@/assets/ip-new2.png';
import uiDesign1Image from '@/assets/ui-design-1.png';
import uiDesign2Image from '@/assets/ui-design-2.png';

/**
 * 首页组件
 * 所有内容在一个页面展示:
 * 1. 平面作品 (4个)
 * 2. 视频动画 (2个,16:9横屏)
 * 3. 工作经历
 * 4. 关于我
 */
function Home() {
  const graphicProjects = [
    {
      id: 1,
      title: 'IP形象设计',
      client: '原创设计',
      category: 'IP设计',
      year: '2024',
      image: ipNewImage,
      gradient: ''
    },
    {
      id: 2,
      title: 'IP形象延展',
      client: '原创设计',
      category: 'IP设计',
      year: '2024',
      image: ipNew2Image,
      gradient: ''
    },
    {
      id: 13,
      title: 'UI设计',
      client: '应用界面',
      category: 'UI设计',
      year: '2024',
      image: uiDesign1Image,
      gradient: ''
    },
    {
      id: 14,
      title: 'UI设计',
      client: '应用界面',
      category: 'UI设计',
      year: '2024',
      image: uiDesign2Image,
      gradient: ''
    }
  ];

  const videoProjects = [
    {
      id: 1,
      title: '品牌动态标识',
      client: '科技公司品牌',
      category: '动态图形',
      year: '2024',
      duration: '0:30',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      id: 2,
      title: '产品宣传片',
      client: '消费电子品牌',
      category: '视频剪辑',
      year: '2024',
      duration: '2:15',
      gradient: 'from-gray-600 to-gray-800'
    }
  ];

  const experiences = [
    {
      company: '上海壮诚体育器材有限公司',
      position: '设计',
      period: '2024.10 - 至今',
      description: '负责日常视觉设计、电商平台产品主图和详情页设计、业务对接等工作。'
    },
    {
      company: '上海贝耳塔信息科技有限公司',
      position: '视频动画设计',
      period: '2020.10 - 2024.06',
      description: '负责产品研发团队视频类需求,包括线上课程、MG动画、H5动效设计。为招行、建行、中国银行等客户定制金融类产品视频制作,参与游戏策划、分镜绘制、动画制作等全流程。'
    },
    {
      company: '上海易编学科技有限公司',
      position: '动画设计',
      period: '2019.06 - 2020.09',
      description: '负责公司APP中的UI设计、Banner动效设计,参与产品迭代升级。为客户提供定制的产品动画视频及宣发内容。'
    },
    {
      company: '上海韬图动漫科技有限公司',
      position: '插图设计',
      period: '2017.06 - 2019.06',
      description: '负责脚本绘制和素材制作,完成品牌课程的动画制作,以及游戏APP内的动效设计和UI优化。'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            臧秀娟的设计站
          </Link>
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <a href="#graphic-design" className="text-sm hover:text-gray-600 transition-colors">
              平面作品
            </a>
            <a href="#video" className="text-sm hover:text-gray-600 transition-colors">
              视频动画
            </a>
            <a href="#experience" className="text-sm hover:text-gray-600 transition-colors">
              工作经历
            </a>
            <a href="#about" className="text-sm hover:text-gray-600 transition-colors">
              关于我
            </a>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="min-h-[60vh] flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧 - 参考图区域 */}
          <div className="order-2 lg:order-1">
            <img
              src={heroImage}
              alt="AI辅助设计"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* 右侧 - 大标题 */}
          <div className="order-1 lg:order-2 text-left lg:text-right">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-none">
              <span className="text-gray-800">AI</span>
              <br />
              <span className="text-gray-500">让创作</span>
              <br />
              <span className="text-gray-500">更高效</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              UI动效 / MG动画 / 平面设计
            </p>
            <p className="text-base md:text-lg text-gray-500">
              臧秀娟 · 14年设计经验
            </p>
          </div>
        </div>
      </section>

      {/* 1. 平面作品板块 */}
      <section id="graphic-design" className="py-24 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">平面作品</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {graphicProjects.map((project) => (
              <div key={project.id} className="group">
                <Link
                  to="/graphic-design"
                  className="block bg-gray-100 aspect-[4/3] overflow-hidden mb-4"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                      <span className="text-6xl font-bold text-white/30">{project.id.toString().padStart(2, '0')}</span>
                    </div>
                  )}
                </Link>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/graphic-design"
              className="inline-block px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors font-bold"
            >
              查看更多平面作品 →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 视频动画板块 */}
      <section id="video" className="py-24 px-6 bg-gray-100 text-black border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">视频动画</h2>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {videoProjects.map((video) => (
              <div key={video.id} className="group">
                <Link
                  to="/video"
                  className="relative block bg-gray-100 aspect-video overflow-hidden mb-4"
                >
                  <div className={`w-full h-full bg-gradient-to-br ${video.gradient} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                    <span className="text-6xl font-bold text-white/30">{video.id.toString().padStart(2, '0')}</span>
                  </div>
                  {/* 播放按钮 */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-black ml-1" fill="black" />
                    </div>
                  </div>
                  {/* 时长 */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs">
                    {video.duration}
                  </div>
                </Link>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                      {video.title}
                    </h3>
                    <span className="text-sm text-gray-500">{video.year}</span>
                  </div>
                  <p className="text-gray-600">{video.client}</p>
                  <p className="text-sm text-gray-500">{video.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/video"
              className="inline-block px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors font-bold"
            >
              查看更多视频作品 →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 工作经历板块 */}
      <section id="experience" className="py-24 px-6 border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">工作经历</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 border-l-2 border-black/20 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-black rounded-full -translate-x-[9px]" />

                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.position}</h3>
                  <p className="text-gray-600 mb-1">{exp.company}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/experience"
              className="inline-block px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              查看完整经历 →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 关于我板块 */}
      <section id="about" className="py-24 px-6 border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">关于我</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                我有14年设计经验,能适应不同行业的设计风格,在教育、金融、电商、体育等领域都有丰富经验。
              </p>
              <p>
                擅长理解策划文案,与开发团队有效配合,推进项目顺利进行。工作不局限于动画设计,也包括短视频剪辑、
                海报宣传单、画册、UI动效、PPT等日常设计。
              </p>
              <p>
                熟练使用AIGC软件辅助日常工作,有自己完整的工作流程。
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">教育经历</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-black pl-4">
                    <p className="font-bold">上海交通大学继续教育学院</p>
                    <p className="text-sm text-gray-600">本科/学士 · 视觉传达设计 (2017-2019)</p>
                  </div>
                  <div className="border-l-2 border-black pl-4">
                    <p className="font-bold">大连职业技术学院</p>
                    <p className="text-sm text-gray-600">大专 · 影视动画 (2008-2011)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">常用工具</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-sm">PS</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm">AI</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm">AE</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm">PR</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm">Id</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm">手绘板</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm">MJ/SD</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm">即梦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:zangfeiyu21@126.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              联系我
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              了解更多 →
            </Link>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-6 border-t border-black/10 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              © 2024 臧秀娟作品集. 保留所有权利.
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:zangfeiyu21@126.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                zangfeiyu21@126.com
              </a>
              <a href="tel:18721183215" className="text-sm text-gray-400 hover:text-white transition-colors">
                18721183215
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
