import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Instagram, Linkedin, Calendar, Building } from 'lucide-react';

/**
 * 工作经历页面
 * 展示职业历程和工作经验
 */
function Experience() {
  const experiences = [
    {
      id: 1,
      company: '上海壮诚体育器材有限公司',
      position: '设计',
      period: '2024.10 - 至今',
      description: '负责日常视觉设计工作。',
      achievements: [
        '日常视觉设计：海报、长图文、PPT设计,画册、宣传单、展会物料等',
        '电商平台的产品主图和详情页设计,优化展示效果',
        '业务对接和客户服务,产品售前售后支持'
      ]
    },
    {
      id: 2,
      company: '上海贝耳塔信息科技有限公司',
      position: '视频动画设计',
      period: '2020.10 - 2024.06',
      description: '负责产品研发团队视频类需求,包括线上课程、MG动画、H5动效设计。',
      achievements: [
        '为招行、建行、中国银行、平安人寿等客户定制的基金类保险类产品视频制作',
        '互动游戏类投教视频,已上线建行、招行客户端十余支,使客户获客大量提升',
        '动画素材库0-1搭建,服务几十家客户上万名销售',
        '金融投教系列课程超过10类,上线300余期课程',
        '负责绘制素材、动效设计及输出文件给开发团队,跟踪产品落地效果'
      ]
    },
    {
      id: 3,
      company: '上海易编学科技有限公司',
      position: '动画设计',
      period: '2019.06 - 2020.09',
      description: '负责公司APP中的UI设计、Banner动效设计,参与产品迭代升级。',
      achievements: [
        '产品研发团队视频类需求：线上课程、MG动画、H5动效设计',
        '公司APP中的UI设计、Banner动效设计,参与产品迭代升级',
        '为客户定制的产品动画视频及其他宣发内容',
        '日常视觉设计：海报、PPT、抖音和小红书等平台视频'
      ]
    },
    {
      id: 4,
      company: '上海韬图动漫科技有限公司',
      position: '插图设计',
      period: '2013.08 - 2017.06',
      description: '负责脚本绘制和素材制作,完成品牌课程的动画制作。',
      achievements: [
        '脚本绘制和素材制作,完成品牌课程的动画制作',
        '游戏APP内的动效设计和UI优化',
        '使用手绘板进行插画创作'
      ]
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
            <Link to="/graphic-design" className="text-sm hover:text-gray-600 transition-colors">
              平面设计
            </Link>
            <Link to="/video" className="text-sm hover:text-gray-600 transition-colors">
              视频
            </Link>
            <Link to="/experience" className="text-sm font-bold">
              工作经历
            </Link>
            <Link to="/about" className="text-sm hover:text-gray-600 transition-colors">
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
              工作经历
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600">
              职业生涯的每一个阶段
            </p>
          </div>

          {/* 时间线 */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 md:pl-12 border-l-2 border-black/20 pb-12 last:pb-0"
              >
                {/* 时间点 */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-black rounded-full -translate-x-[9px]" />

                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                    <h2 className="text-2xl md:text-3xl font-bold">{exp.position}</h2>
                    <span className="text-gray-500">|</span>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* 成就 */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                    主要成就
                  </h3>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* 教育背景 */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">教育背景</h2>
            <div className="border-l-2 border-black/20 pl-8 md:pl-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">上海交通大学继续教育学院</h3>
                <p className="text-gray-600 mb-1">本科/学士 · 视觉传达设计</p>
                <p className="text-gray-500">2017 - 2019</p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">大连职业技术学院</h3>
                <p className="text-gray-600 mb-1">大专 · 影视动画</p>
                <p className="text-gray-500">2008 - 2011</p>
              </div>
            </div>
          </div>

          {/* 技能与证书 */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">专业技能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4">设计工具</h3>
                <div className="flex flex-wrap gap-3">
                  {['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'InDesign', '手绘板', 'MJ/SD', '即梦等AI工具'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white border border-black/20 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4">核心能力</h3>
                <div className="flex flex-wrap gap-3">
                  {['MG动画', 'UI动效', '平面设计', '插画创作', '视频剪辑', 'AIGC辅助设计', '团队协作', '项目管理'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white border border-black/20 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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

export default Experience;
