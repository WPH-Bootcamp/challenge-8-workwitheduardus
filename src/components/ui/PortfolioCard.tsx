import type { PortfolioCardProps } from "../../types";

const PortfolioCard = ({ item, imgSrc }: PortfolioCardProps) => {
  return (
    <div className="group">
      <div className="aspect-square rounded-2xl overflow-hidden mb-3">
        <img
          src={imgSrc}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <span className="text-sm font-medium text-primary-200">
        {item.category}
      </span>
      <h3 className="text-lg font-medium text-neutral-900">{item.title}</h3>
    </div>
  );
};
export default PortfolioCard;
