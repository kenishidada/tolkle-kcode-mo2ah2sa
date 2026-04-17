"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, LineChart, CheckCircle2, Star, Phone, Mail, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-cyan-500/30">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
              <span className="text-white text-lg">K</span>
            </div>
            Kcode
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
          </nav>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-[10px] shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] transition-all hover:scale-105 hidden md:inline-flex">
            お問い合わせ
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-6 px-4 py-1.5 text-sm">
                次世代のシステム開発
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              テクノロジーで、<br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                ビジネスの限界を超える
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Kcodeは、最新のAI技術とモダンな開発手法を駆使し、
              お客様のビジネス課題を解決するシステムエンジニアリングサービスを提供します。
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white rounded-[10px] shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] transition-all hover:scale-105 h-14 px-8 text-lg">
                無料相談を予約する
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 rounded-[10px] h-14 px-8 text-lg bg-transparent">
                サービス詳細を見る
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              最新技術を活用し、要件定義から開発、運用保守まで一気通貫でサポートします。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Webシステム開発",
                desc: "React, Next.jsなどのモダンな技術スタックを用いた、高速で拡張性の高いWebアプリケーションを開発します。",
                icon: <Code2 className="w-6 h-6 text-cyan-400" />,
                image: "/images/service-web.png"
              },
              {
                title: "AIインテグレーション",
                desc: "LLMなどの最新AI技術を既存システムに組み込み、業務効率化と新しい価値創造を実現します。",
                icon: <Cpu className="w-6 h-6 text-indigo-400" />,
                image: "/images/service-system.png"
              },
              {
                title: "ITコンサルティング",
                desc: "技術選定からアーキテクチャ設計、開発プロセスの改善まで、技術的な課題解決をサポートします。",
                icon: <LineChart className="w-6 h-6 text-cyan-400" />,
                image: "/images/service-consulting.png"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-md border-white/10 overflow-hidden h-full hover:border-cyan-500/30 transition-colors">
                  <div className="h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-slate-900/80 backdrop-blur flex items-center justify-center border border-white/10">
                      {service.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-50">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                なぜ <span className="text-cyan-400">Kcode</span> が<br />選ばれるのか
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                単なる「動くコード」ではなく、ビジネスの成長を見据えた「価値あるシステム」を提供します。
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "モダン技術への深い知見", desc: "常に最新の技術動向をキャッチアップし、最適な技術スタックを選定します。" },
                  { title: "ビジネス視点での提案", desc: "技術的な要件だけでなく、ビジネスの目的達成に向けた提案を行います。" },
                  { title: "アジャイルな開発プロセス", desc: "柔軟かつスピーディーな開発で、市場の変化に素早く対応します。" }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-50 mb-1">{feature.title}</h3>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <Card className="bg-slate-800/70 backdrop-blur-md border-white/10 p-6 text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                    <div className="text-sm text-slate-400">モダン技術採用率</div>
                  </Card>
                  <Card className="bg-slate-800/70 backdrop-blur-md border-white/10 p-6 text-center">
                    <div className="text-4xl font-bold text-indigo-400 mb-2">24/7</div>
                    <div className="text-sm text-slate-400">サポート体制</div>
                  </Card>
                </div>
                <div className="space-y-4">
                  <Card className="bg-slate-800/70 backdrop-blur-md border-white/10 p-6 text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-sm text-slate-400">プロジェクト実績</div>
                  </Card>
                  <Card className="bg-slate-800/70 backdrop-blur-md border-white/10 p-6 text-center">
                    <div className="text-4xl font-bold text-indigo-400 mb-2">98%</div>
                    <div className="text-sm text-slate-400">顧客満足度</div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              これまでにご支援させていただいたお客様の声をご紹介します。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "株式会社テックイノベーション",
                role: "CTO",
                content: "レガシーシステムの刷新プロジェクトでお世話になりました。最新の技術スタックへの移行をスムーズに実現していただき、開発スピードが劇的に向上しました。"
              },
              {
                name: "スタートアップ企業",
                role: "代表取締役",
                content: "AIを活用した新規サービスの立ち上げで相談に乗っていただきました。技術的な実現可能性だけでなく、ビジネスモデルの観点からも有益なアドバイスをいただき感謝しています。"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-md border-white/10 h-full">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-cyan-500 text-cyan-500" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      「{testimonial.content}」
                    </p>
                    <div>
                      <div className="font-semibold text-slate-50">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 bg-gradient-to-br from-cyan-900/40 to-slate-900/80">
                <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
                <p className="text-slate-400 mb-8">
                  システム開発、AI導入、技術コンサルティングなど、お気軽にご相談ください。
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">お電話でのご相談</div>
                      <div className="text-lg font-semibold text-slate-50">070-5549-4714</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">メールでのご相談</div>
                      <div className="text-lg font-semibold text-slate-50">info@kcode.dev</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 md:p-12">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">お名前</label>
                    <Input 
                      placeholder="山田 太郎" 
                      className="bg-slate-900/50 border-slate-700 focus-visible:ring-cyan-500 text-slate-50 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">メールアドレス</label>
                    <Input 
                      type="email" 
                      placeholder="yamada@example.com" 
                      className="bg-slate-900/50 border-slate-700 focus-visible:ring-cyan-500 text-slate-50 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">お問い合わせ内容</label>
                    <textarea 
                      className="flex min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="ご相談内容をご記入ください"
                    />
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-[10px] shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] h-12 text-base mt-4">
                    送信する
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-lg">K</span>
              </div>
              Kcode
            </div>
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Kcode. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
