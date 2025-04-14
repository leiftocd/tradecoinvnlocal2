/* eslint-disable react/prop-types */
import clsx from "clsx";
import { forwardRef } from "react";
import './card.css';

const Card = forwardRef(
  ({ className, slug, imgOnly, title, img, description, ...props }, ref) => {
    return (
      <a rel="noreferrer" href={`/${slug}`} ref={ref} {...props}>
        <div
          className={clsx(
            {
              "card transition-all duration-300": !imgOnly,
            },
            className
          )}
        >
          {title && <p className="title-card">{title}</p>}
          <p>
            <img decoding="async" src={img} />
          </p>
          {description && (
            <p className="text-description p-market-res">{description}</p>
          )}
        </div>
      </a>
    );
  }
);

Card.displayName = "Card";
export { Card };
