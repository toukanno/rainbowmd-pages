import React from 'https://esm.sh/react@18.3.1'
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client'

const features = [
  {
    title: 'リアルタイムプレビュー',
    description: '書いた瞬間にレンダリング。思考を止めない執筆体験を提供します。',
  },
  {
    title: 'ミニマルで高速',
    description: 'シンプルなUIで、起動から編集までスムーズに操作できます。',
  },
  {
    title: 'オフラインで安心',
    description: 'データはローカル完結。ネット接続がなくても快適に使えます。',
  },
]

function App() {
  return React.createElement(
    'div',
    { className: 'page' },
    React.createElement(
      'header',
      { className: 'hero' },
      React.createElement('p', { className: 'badge' }, 'Markdown Editor'),
      React.createElement('h1', null, 'RainbowMD'),
      React.createElement(
        'p',
        { className: 'lead' },
        '美しく、軽快に。',
        React.createElement('br'),
        '文章作成をもっと心地よくするMarkdownエディタ。'
      ),
      React.createElement(
        'div',
        { className: 'cta-row' },
        React.createElement(
          'a',
          { className: 'button primary', href: './windows/dist/RainbowMD.Setup.1.0.0.exe' },
          'Windows版をダウンロード'
        ),
        React.createElement(
          'a',
          { className: 'button ghost', href: 'https://github.com/toukanno/markdown-electron' },
          'GitHubを見る'
        )
      )
    ),
    React.createElement(
      'main',
      null,
      React.createElement(
        'section',
        { className: 'panel' },
        React.createElement('h2', null, '主な機能'),
        React.createElement(
          'div',
          { className: 'grid' },
          ...features.map((feature) =>
            React.createElement(
              'article',
              { key: feature.title, className: 'card' },
              React.createElement('h3', null, feature.title),
              React.createElement('p', null, feature.description)
            )
          )
        )
      )
    ),
    React.createElement(
      'footer',
      { className: 'footer' },
      React.createElement('small', null, `© ${new Date().getFullYear()} RainbowMD`),
      React.createElement('a', { href: '/privacy-policy.html' }, 'プライバシーポリシー')
    )
  )
}

createRoot(document.getElementById('root')).render(React.createElement(App))
