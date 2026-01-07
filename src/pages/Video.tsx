import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Instagram, Linkedin, Play } from 'lucide-react';
import { useRef, useEffect } from 'react';

/**
 * 视频作品展示页面
 * 展示动态图形、视频剪辑、视觉特效等视频作品
 */
function Video() {
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  const videos = [
    {
      id: 1,
      title: '理财互动游戏视频1',
      client: '金融机构',
      category: '互动游戏',
      year: '2024',
      duration: '1:30',
      description: '',
      videoUrl: 'https://agent-statics-tc.nuwax.com/tmp/db94683e9a0e4246996664850a878bac.mp4',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      id: 2,
      title: '理财互动游戏视频2',
      client: '金融机构',
      category: '互动游戏',
      year: '2024',
      duration: '1:30',
      description: '',
      videoUrl: 'https://agent-statics-tc.nuwax.com/tmp/2d4ca9e442634d8c8427368395d89f18.mp4',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      id: 3,
      title: '理财互动游戏视频3',
      client: '金融机构',
      category: '互动游戏',
      year: '2024',
      duration: '1:30',
      description: '',
      videoUrl: 'https://agent-statics-tc.nuwax.com/tmp/56afcfa57a884e99bde68e4a2c97eeb1.mp4',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      id: 4,
      title: '理财互动游戏视频投教部分',
      client: '金融机构',
      category: '互动游戏',
      year: '2024',
      duration: '1:30',
      description: '',
      videoUrl: 'https://agent-statics-tc.nuwax.com/tmp/eef80e4ac6e442d28cfe8859dc41d0b5.mp4',
      gradient: 'from-gray-800 to-black'
    },
    {
      id: 5,
      title: '节日H5短视频',
      client: '',
      category: '',
      year: '2024',
      duration: '0:30',
      description: '',
      videoUrl: 'https://agent-statics-tc.nuwax.com/tmp/50146f6c5d9b45398fcffeeeb29f2446.mp4',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      id: 6,
      title: '节日H5短视频',
      client: '',
      category: '',
      year: '2024',
      duration: '0:30',
      description: '',
      videoUrl: 'https://agent-statics-tc.nuwax.com/tmp/ec2ca1fc974c47899d9f991853b8909f.mp4',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      id: 7,
      title: '金融投教类短视频',
      client: '',
      category: '',
      year: '2024',
      duration: '0:30',
      description: '',
      videoUrl: 'https://agent-statics-tc.nuwax.com/tmp/f77d2450439042fea9a12c4e07d2a939.mp4',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      id: 8,
      title: '早教机构宣传片',
      client: '',
      category: '',
      year: '2024',
      duration: '0:30',
      description: '',
      videoUrl: 'https://agent-statics-tc.nuwax.com/tmp/b4c9576191054f92a6d5833dea025335.mp4',
      gradient: 'from-gray-600 to-gray-800'
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
              视频动画
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
                <div
                  className="relative block bg-gray-100 aspect-video overflow-hidden mb-4"
                >
                  {video.videoUrl ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current[video.id] = el;
                          // 为第一个视频设置预览时间为第60秒
                          if (video.id === 1) {
                            el.currentTime = 60;
                            // 确保视频停留在第60秒作为预览
                            el.addEventListener('loadedmetadata', () => {
                              el.currentTime = 60;
                            }, { once: true });
                          }
                          // 为第二个视频设置预览时间为第1分43秒
                          if (video.id === 2) {
                            el.currentTime = 103;
                            // 确保视频停留在第1分43秒作为预览
                            el.addEventListener('loadedmetadata', () => {
                              el.currentTime = 103;
                            }, { once: true });
                          }
                          // 为第三个视频设置预览时间为第2秒
                          if (video.id === 3) {
                            el.currentTime = 2;
                            // 确保视频停留在第2秒作为预览
                            el.addEventListener('loadedmetadata', () => {
                              el.currentTime = 2;
                            }, { once: true });
                          }
                          // 为第四个视频设置预览时间为第38秒
                          if (video.id === 4) {
                            el.currentTime = 38;
                            // 确保视频停留在第38秒作为预览
                            el.addEventListener('loadedmetadata', () => {
                              el.currentTime = 38;
                            }, { once: true });
                          }
                        }
                      }}
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    />
                  ) : (
                    <>
                      <div className={`w-full h-full bg-gradient-to-br ${video.gradient} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}>
                        <span className="text-6xl font-bold text-white/30">{video.id.toString().padStart(2, '0')}</span>
                      </div>
                      {/* 播放按钮 */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-black ml-1" fill="black" />
                        </div>
                      </div>
                    </>
                  )}
                  {/* 时长 */}
                  {!video.videoUrl && (
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs">
                      {video.duration}
                    </div>
                  )}
                </div>

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
                  {video.description && (
                    <p className="text-gray-700 mt-3 line-clamp-2">
                      {video.description}
                    </p>
                  )}
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
                <h3 className="text-xl font-bold mb-3">AI视频</h3>
                <p className="text-gray-400">
                  AI视频/AI动画/AI动效
                </p>
              </div>
            </div>
          </div>

          {/* 工具说明 */}
          <div className="mt-16 border-t border-black/10 pt-12">
            <h2 className="text-2xl font-bold mb-6">使用的工具</h2>
            <div className="flex flex-wrap gap-4">
              {['Adobe After Effects', 'Adobe Premiere Pro', '剪映', 'Sora', 'oiioii'].map((tool) => (
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
