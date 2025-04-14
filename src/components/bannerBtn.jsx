/* eslint-disable react/prop-types */
import '../components/button.css';

function BannerBtn({ slug, href, text, className, spanBtn }) {
  const finalHref = href || `/${slug}`;

  return (
    <a rel="noreferrer" href={finalHref} className={className} target="_self">
      <div className="flex">
        <span className={spanBtn}>{text}</span>
      </div>
    </a>
  );
}

export default BannerBtn;
