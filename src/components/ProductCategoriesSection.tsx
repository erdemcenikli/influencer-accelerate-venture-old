import { useEffect, useRef } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
}

const ProductCard = ({ title, description, imageSrc, delay }: ProductCardProps) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="product-card opacity-0 translate-y-10 transition-all duration-700 flex flex-col"
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="p-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

interface ProductCategoriesSectionProps {
  id?: string;
}

const ProductCategoriesSection = ({ id = "products" }: ProductCategoriesSectionProps) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id={id} className="py-20">
      <div className="section-container">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="chip mb-4">Product Portfolio</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exclusive collection of premium skincare and makeup products
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Skincare Line</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Pineapple Refresh Cleanser"
              description="A gel-to-foam daily cleanser formulated with pineapple enzymes, green tea extract, and polyglutamic acid to gently exfoliate and hydrate the skin."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={0}
            />
            
            <ProductCard
              title="Glazing Milk"
              description="A lightweight essence containing ceramides, beta-glucan, and minerals like magnesium, zinc, and copper, designed to prep and hydrate the skin."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={100}
            />
            
            <ProductCard
              title="Peptide Glazing Fluid"
              description="A gel-serum enriched with niacinamide, peptides, hyaluronic acid, and marula oil, aiming to provide a dewy, hydrated glow."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={200}
            />
            
            <ProductCard
              title="Barrier Restore Cream"
              description="A rich moisturizer featuring shea butter, squalane, peptides, and niacinamide, intended to support and repair the skin barrier."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={300}
            />
            
            <ProductCard
              title="Barrier Butter"
              description="An intensive moisture balm designed for areas needing extra hydration, suitable for both face and body."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={400}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Lip & Color Collection</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Peptide Lip Treatment"
              description="A nourishing lip balm containing shea butter, peptides, cupuaçu, and babassu, available in flavors like Unscented, Watermelon Slice, Salted Caramel, and Rhode Vanilla."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={0}
            />
            
            <ProductCard
              title="Peptide Lip Tint"
              description="A tinted version of the lip treatment offering a sheer wash of color, available in shades such as Raspberry Jelly, Ribbon, Toast, Espresso, Shortcake, Peach Pit, Guava Spritz, and Salty Tan."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={100}
            />
            
            <ProductCard
              title="Peptide Lip Shape"
              description="A lip contouring product designed to define and shape the lips, featuring a built-in silicone shaping brush."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={200}
            />
            
            <ProductCard
              title="Pocket Blush"
              description="A cream blush providing a natural flush, available in various shades to complement any skin tone and create a healthy, radiant glow."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={300}
            />
            
            <ProductCard
              title="The Duos"
              description="A set combining Pocket Blush and Peptide Lip Tint for a coordinated lip and cheek look, perfect for creating a cohesive, harmonious makeup look."
              imageSrc="/lovable-uploads/e90dba93-3d65-446f-8a2c-f024c43fe3e7.png"
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
