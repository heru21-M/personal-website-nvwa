import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Instagram, Linkedin, Play } from 'lucide-react';

/**
 * 视频作品展示页面
 * 展示动态图形、视频剪辑、视觉特效等视频作品
 */
function Video() {
  const videos = [
    {
      id: 1,
      title: '品牌动态标识',
      client: '科技公司品牌',
      category: '动态图形',
      year: '2024',
      duration: '0:30',
      description: '为科技公司品牌设计动态Logo和品牌动画,展现品牌的创新精神和科技感。',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      id: 2,
      title: '产品宣传片',
      client: '消费电子品牌',
      category: '视频剪辑',
      year: '2024',
      duration: '2:15',
      description: '制作产品宣传视频,通过精美的镜头语言和流畅的剪辑,突出产品特性和使用场景。',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      id: 3,
      title: '社交媒体动画',
      client: '时尚品牌',
      category: '动态图形',
      year: '2023',
      duration: '0:15',
      description: '为社交媒体平台创作一系列短视频动画,提升品牌在社交媒体的视觉表现力。',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      id: 4,
      title: '音乐视频',
      client: '独立音乐人',
      category: '视觉特效',
      year: '2023',
      duration: '3:45',
      description: '为音乐人创作音乐视频,融合实拍和动画元素,创造梦幻般的视觉体验。',
      gradient: 'from-gray-800 to-black'
    },
    {
      id: 5,
      title: '活动开场动画',
      client: '科技大会',
      category: '动态图形',
      year: '2023',
      duration: '1:00',
      description: '设计科技大会的开场动画,为活动营造震撼的开幕氛围。',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      id: 6,
      title: '信息图表动画',
      client: '教育机构',
      category: '动态图形',
      year: '2022',
      duration: '2:30',
      description: '将复杂的数据和信息转化为生动的动画视频,让学习变得更加有趣和高效。',
      gradient: 'from-gray-500 to-gray-700'
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
            <Link to="/video" className="text-sm font-bold">
              视频
            </Link>
            <Link to="/experience" className="text-sm hover:text-gray-600 transition-colors">
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
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              视频作品
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600">
              动态图形 / 视频剪辑 / 视觉特效
            </p>
          </div>

          {/* 分类筛选 */}
          <div className="mb-12 flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-black text-white text-sm">
              全部
            </button>
            <button className="px-6 py-2 border border-black/20 text-sm hover:bg-black hover:text-white transition-colors">
              动态图形
            </button>
            <button className="px-6 py-2 border border-black/20 text-sm hover:bg-black hover:text-white transition-colors">
              视频剪辑
            </button>
            <button className="px-6 py-2 border border-black/20 text-sm hover:bg-black hover:text-white transition-colors">
              视觉特效
            </button>
          </div>

          {/* 视频网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group"
              >
                {/* 视频预览 */}
                <Link
                  to="#"
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

                {/* 视频信息 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                      {video.title}
                    </h3>
                    <span className="text-sm text-gray-500">{video.year}</span>
                  </div>
                  <p className="text-gray-600">{video.client}</p>
                  <p className="text-sm text-gray-500">{video.category}</p>
                  <p className="text-gray-700 mt-3 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 更多作品提示 */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              想看更多视频作品?
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
              视频制作服务
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">动态图形</h3>
                <p className="text-gray-400">
                  Logo动画 / 品牌动画 / 信息图表动画 / 社交媒体动画
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">视频剪辑</h3>
                <p className="text-gray-400">
                  产品宣传视频 / 企业宣传片 / 活动视频 / 纪录片
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">视觉特效</h3>
                <p className="text-gray-400">
                  特效合成 / 调色 / 三维动画 / 音乐视频
                </p>
              </div>
            </div>
          </div>

          {/* 工具说明 */}
          <div className="mt-16 border-t border-black/10 pt-12">
            <h2 className="text-2xl font-bold mb-6">使用的工具</h2>
            <div className="flex flex-wrap gap-4">
              {['Adobe After Effects', 'Adobe Premiere Pro', 'Cinema 4D', 'DaVinci Resolve', 'Final Cut Pro'].map((tool) => (
                <span
                  key={tool}
                  className="px-6 py-3 bg-gray-100 text-sm"
                >
                  {tool}
                </span>
              ))}
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

export default Video;
