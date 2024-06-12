import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";

export const Grid = () => {
  return (
    <>
      <section id="about">
        <BentoGrid className="w-full py-20">
          {gridItems.map(
            ({
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              spareImg,
              titleClassName,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            ),
          )}
        </BentoGrid>
      </section>
    </>
  );
};
