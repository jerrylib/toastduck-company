// HashRedirect.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function HashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    // 检测是否为旧的 Hash 路由形式，例如 #/news 或 #/news?page=2
    if (hash.startsWith('#/')) {
      // 提取 # 之后的路径及查询参数 (例如 "/news?page=2")
      const targetPath = hash.slice(1);
      
      // 使用 replace 替换当前历史记录，避免返回时陷入重定向死循环
      navigate(targetPath, { replace: true });
    }
  }, [navigate]);

  return null;
}