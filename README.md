# react-router

## v5 to v6

react-router-dom v6 直接全面拥抱 hook 根本不管 class component
如果要在嵌套路由中使用 v5 中的 props.history, 需要在外层嵌套 function component
参见 src/pages/about.tsx
v6 删除了 withRouter, 但提供了 polyfill 供 App.tsx 使用 history
具体参见 src/App.tsx
需要将 App component 内的 BrowserHistory 放到 index.tsx 中
另外 location, params, history 都需要使用 usexxx 引入使用
v6 中 useHistory 已被 useNavigate 替代

## Reach Router

[reach router](https://reach.tech/router/api/useLocation)
