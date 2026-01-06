import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import ipNewImage from '@/assets/ip-new.png';
import ipNew2Image from '@/assets/ip-new2.png';
import financeVideoImage from '@/assets/finance-video.png';
import solarTermsImage from '@/assets/solar-terms.png';
import eventPosterImage from '@/assets/event-poster.png';
import golfClubProductImage from '@/assets/golf-club-product.png';

/**
 * 平面设计作品展示页面
 * 展示品牌设计、视觉设计、插画等平面作品
 */
function GraphicDesign() {
  const projects = [
    {
      id: 1,
      title: 'IP形象设计',
      client: '原创设计',
      category: 'IP设计',
      year: '2024',
      description: '原创IP形象设计，融合现代设计元素与创意理念，打造独特的视觉识别系统。',
      image: ipNewImage,
      gradient: ''
    },
    {
      id: 2,
      title: 'IP形象延展',
      client: '原创设计',
      category: 'IP设计',
      year: '2024',
      description: '基于IP形象进行的延展设计，包括多种应用场景和不同风格的变化。',
      image: ipNew2Image,
      gradient: ''
    },
    {
      id: 3,
      title: '理财视频设计稿',
      client: '金融机构',
      category: '视频设计',
      year: '2024',
      description: '为金融机构设计的理财视频内容，采用清晰的信息层级和专业的视觉呈现。',
      image: financeVideoImage,
      gradient: ''
    },
    {
      id: 4,
      title: '二十四节气动态设计稿',
      client: '原创设计',
      category: '动态设计',
      year: '2024',
      description: '结合传统文化元素与现代动态设计，展现二十四节气的独特魅力。',
      image: solarTermsImage,
      gradient: ''
    },
    {
      id: 5,
      title: '赛事海报',
      client: '体育赛事',
      category: '海报设计',
      year: '2024',
      description: '为体育赛事设计的宣传海报，运用动态元素和强烈的视觉冲击力，传递赛事的激情与活力。',
      image: eventPosterImage,
      gradient: ''
    },
    {
      id: 6,
      title: '球杆产品图',
      client: '体育用品',
      category: '产品摄影',
      year: '2024',
      description: '台球杆产品电商详情页宣传图，契合品牌名称，打造有冲击力的视觉效果。',
      image: golfClubProductImage,
      gradient: ''
    },
    {
      id: 7,
      title: '品牌标识设计',
      client: '科技公司',
      category: '品牌设计',
      year: '2024',
      description: '为科技公司打造的现代品牌标识，简洁有力的视觉传达，体现科技与创新。',
      gradient: 'from-gray-200 to-gray-400'
    },
    {
      id: 8,
      title: '宣传册设计',
      client: '教育机构',
      category: '编辑设计',
      year: '2024',
      description: '教育机构宣传册设计，信息层级清晰，视觉风格统一专业。',
      gradient: 'from-gray-300 to-gray-500'
    },
    {
      id: 9,
      title: '活动主视觉',
      client: '商业活动',
      category: '平面设计',
      year: '2024',
      description: '商业活动主视觉设计，营造热烈氛围，提升品牌影响力。',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      id: 10,
      title: '包装视觉设计',
      client: '消费品牌',
      category: '包装设计',
      year: '2024',
      description: '消费品牌包装视觉设计，突出产品特色，增强货架吸引力。',
      gradient: 'from-gray-500 to-gray-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            作品集
          </Link>
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <Link to="/about" className="text-sm hover:text-gray-600 transition-colors">
              关于我
            </Link>
            <Link to="/experience" className="text-sm hover:text-gray-600 transition-colors">
              工作经历
            </Link>
            <Link to="/graphic-design" className="text-sm font-bold">
              平面设计
            </Link>
            <Link to="/video" className="text-sm hover:text-gray-600 transition-colors">
              视频
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
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              平面设计
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600">
              品牌识别 / 视觉设计 / 插画创作
            </p>
          </div>

          {/* 分类筛选 */}
          <div className="mb-12 flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-black text-white text-sm">
              全部
            </button>
            <button className="px-6 py-2 border border-black/20 text-sm hover:bg-black hover:text-white transition-colors">
              品牌设计
            </button>
            <button className="px-6 py-2 border border-black/20 text-sm hover:bg-black hover:text-white transition-colors">
              包装设计
            </button>
            <button className="px-6 py-2 border border-black/20 text-sm hover:bg-black hover:text-white transition-colors">
              编辑设计
            </button>
            <button className="px-6 py-2 border border-black/20 text-sm hover:bg-black hover:text-white transition-colors">
              插画
            </button>
          </div>

          {/* 作品网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group"
              >
                {/* 作品预览 */}
                <Link
                  to="#"
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

                {/* 作品信息 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-700 mt-3 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 更多作品提示 */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              想看更多作品?
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} />
              联系我查看更多
            </a>
          </div>

          {/* 服务说明 */}
          <div className="mt-24 bg-black text-white p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              平面设计服务
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">品牌设计</h3>
                <p className="text-gray-400">
                  Logo设计 / 品牌识别系统 / 视觉指南 / 品牌策略
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">视觉设计</h3>
                <p className="text-gray-400">
                  平面设计 / 插画创作 / 包装设计 / 印刷设计
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">编辑设计</h3>
                <p className="text-gray-400">
                  杂志设计 / 书籍设计 / 年报设计 / 海报设计
                </p>
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

export default GraphicDesign;
