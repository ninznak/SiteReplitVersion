'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

const timeline = [
  { year: '2014', title: 'Начало пути', desc: 'Первые шаги в 3D-моделировании и создание первых барельефов.' },
  { year: '2017', title: 'Профессиональный рост', desc: 'Начало работы с нумизматикой и изготовлением медалей.' },
  { year: '2020', title: 'Цифровая трансформация', desc: 'Внедрение AI-инструментов в творческий процесс.' },
  { year: '2024', title: 'KurilenkoArt', desc: 'Запуск студии и объединение 3D и AI-практик.' },
];

const skills = [
  { name: 'ZBrush', level: 95 },
  { name: 'Blender', level: 90 },
  { name: 'Midjourney', level: 85 },
  { name: 'Stable Diffusion', level: 80 },
  { name: 'Cinema 4D', level: 75 },
];

export default function AboutPageContent() {
  return (
    <section className="pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">О студии</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mt-4 leading-tight tracking-display">
            KurilenkoArt
          </h1>
          <p className="text-foreground-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Где 3D-мастерство встречает AI-интеллект. Создаём уникальные цифровые и физические произведения искусства.
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-3xl font-semibold mb-6">Наша миссия</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              KurilenkoArt — это творческая студия, объединяющая традиционное 3D-моделирование с передовыми AI-технологиями. 
              Мы создаём барельефы, медали, монеты и сувениры, а также исследуем возможности AI-генерации изображений и видео.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Каждый проект — это синтез мастерства и инноваций, где ручная работа сочетается с цифровыми технологиями.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <AppImage
              src="/assets/images/portfolio_3d_1.svg"
              alt="KurilenkoArt studio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-semibold mb-8">Навыки и инструменты</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-foreground-subtle">{skill.level}%</span>
                </div>
                <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-semibold mb-8">История</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={item.year} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{idx + 1}</span>
                  </div>
                  <div className="glass-card rounded-2xl p-5">
                    <span className="text-accent-dark font-semibold">{item.year}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-foreground-muted text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '200+', label: '3D Моделей' },
            { num: '50+', label: 'AI Проектов' },
            { num: '12', label: 'Лет опыта' },
            { num: '100+', label: 'Клиентов' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
              <p className="font-display text-3xl font-semibold text-primary">{stat.num}</p>
              <p className="text-[10px] uppercase tracking-widest text-foreground-subtle mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
