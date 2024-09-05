'use client'

import { useState, useMemo } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const initialCards = [
  { title: "AIクリップ生成", description: "長い動画から魅力的なクリップを自動検出" },
  { title: "字幕の自動追加", description: "瞬時に字幕を追加し、カスタマイズ可能" },
  { title: "不適切な表現の検閲", description: "ソーシャルメディアの制限を回避" },
  { title: "マジックリフレーム™", description: "横向き動画を縦向きや正方形に変換" },
  { title: "トランスクリプトベースの編集", description: "97言語でトランスクリプトを生成し編集" },
  { title: "カスタムフォントとテンプレート", description: "ブランドイメージを維持し、スタイルを保存" },
]

const gradientOptions = [
  "bg-gradient-to-r from-pink-300 to-purple-300",
  "bg-gradient-to-r from-yellow-300 to-orange-300",
  "bg-gradient-to-r from-green-300 to-blue-300",
  "bg-gradient-to-r from-indigo-300 to-purple-300",
  "bg-gradient-to-r from-red-300 to-yellow-300",
  "bg-gradient-to-r from-teal-300 to-blue-300",
  "bg-gradient-to-r from-blue-300 to-purple-300",
  "bg-gradient-to-r from-green-300 to-yellow-300"
]

const pastelColors = [
  ["bg-pink-200", "bg-purple-200", "bg-fuchsia-200", "bg-rose-200", "bg-violet-200", "bg-indigo-200"],
  ["bg-yellow-200", "bg-orange-200", "bg-amber-200", "bg-lime-200", "bg-emerald-200", "bg-teal-200"],
  ["bg-green-200", "bg-blue-200", "bg-emerald-200", "bg-sky-200", "bg-cyan-200", "bg-teal-200"],
  ["bg-indigo-200", "bg-purple-200", "bg-violet-200", "bg-fuchsia-200", "bg-pink-200", "bg-rose-200"],
  ["bg-red-200", "bg-yellow-200", "bg-orange-200", "bg-amber-200", "bg-lime-200", "bg-green-200"],
  ["bg-teal-200", "bg-blue-200", "bg-sky-200", "bg-cyan-200", "bg-indigo-200", "bg-violet-200"],
  ["bg-blue-200", "bg-purple-200", "bg-indigo-200", "bg-violet-200", "bg-fuchsia-200", "bg-pink-200"],
  ["bg-green-200", "bg-yellow-200", "bg-lime-200", "bg-emerald-200", "bg-teal-200", "bg-cyan-200"]
]

const InteractiveInfographicEditor = () => {
  const [cards, setCards] = useState(initialCards)
  const [mainTitle, setMainTitle] = useState("Choppity: AIビデオ編集ツール")
  const [conclusion, setConclusion] = useState("Choppityは、忙しいプロフェッショナルやコンテンツクリエイターの時間と労力を節約し、ソーシャルメディアでのリーチ拡大とエンゲージメント向上に貢献します。")
  const [backgroundGradient, setBackgroundGradient] = useState(gradientOptions[0])
  const [timelineTitle, setTimelineTitle] = useState("タイムラインエディター")
  const [timelineDescription, setTimelineDescription] = useState("AIの編集結果をさらに細かく調整可能")

  const currentPastelColors = useMemo(() => {
    const index = gradientOptions.indexOf(backgroundGradient)
    return pastelColors[index]
  }, [backgroundGradient])

  const handleCardChange = (index, field, value) => {
    const newCards = [...cards]
    newCards[index][field] = value
    setCards(newCards)
  }

  return (
    <div className="flex h-screen">
      <div className="w-64 p-4 bg-gray-100 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">背景色</h2>
        <div className="grid grid-cols-2 gap-2">
          {gradientOptions.map((gradient, index) => (
            <button
              key={index}
              className={`w-full h-12 rounded ${gradient}`}
              onClick={() => setBackgroundGradient(gradient)}
              aria-label={`背景グラデーション ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className={`flex-1 ${backgroundGradient} p-8 rounded-lg overflow-y-auto`}>
        <Input
          value={mainTitle}
          onChange={(e) => setMainTitle(e.target.value)}
          className="text-5xl font-bold text-center mb-8 text-gray-800 bg-white bg-opacity-50 border-none rounded-lg py-6 h-auto min-h-[100px] flex items-center justify-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Card key={index} className={`${currentPastelColors[index % currentPastelColors.length]} p-6 rounded-lg shadow-md`}>
              <Input
                value={card.title}
                onChange={(e) => handleCardChange(index, 'title', e.target.value)}
                className="text-2xl font-semibold mb-4 bg-transparent border-none"
              />
              <Input
                value={card.description}
                onChange={(e) => handleCardChange(index, 'description', e.target.value)}
                className="bg-transparent border-none"
              />
            </Card>
          ))}
        </div>
        
        <Card className="bg-white bg-opacity-50 p-6 mt-8 rounded-lg shadow-md">
          <Input
            value={timelineTitle}
            onChange={(e) => setTimelineTitle(e.target.value)}
            className="text-2xl font-semibold mb-4 text-center text-gray-800 bg-transparent border-none"
          />
          <Input
            value={timelineDescription}
            onChange={(e) => setTimelineDescription(e.target.value)}
            className="text-gray-700 text-center bg-transparent border-none"
          />
        </Card>
        
        <textarea
          value={conclusion}
          onChange={(e) => setConclusion(e.target.value)}
          className="mt-8 w-full p-4 text-center text-gray-800 bg-white bg-opacity-50 border-none rounded-lg resize-none"
          rows={3}
        />
      </div>
    </div>
  )
}

export default InteractiveInfographicEditor