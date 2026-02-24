import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [

  //smarphones

  {
    id: 1,
    name: 'Apple iPhone 17',
    description: 'The Apple iPhone 17 Pro 256Gb is the embodiment of innovation and style, combining unrivaled performance , an amazing camera and a bright OLED display ',
    price: 849727,
    rating: 4.8,
    image: "images/iphone17.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy A16s',
    description: 'The Samsung Galaxy A16 is a stylish and functional smartphone that will become your reliable everyday companion. Enjoy a vibrant 6.7-inch Super AMOLED display with FHD+ resolution and a powerful octa-core Helio G99 processor for smooth performance and a comfortable experience.',
    price: 122935,
    rating: 4.7,
    image: "images/samsung_smart.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-6-gb-128-gb-chernyi-130609900/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: 'Realme Note 70',
    description: 'The Realme Note 70 is a stylish and functional smartphone with a large screen and a capacious 6300 mAh battery that will become your reliable assistant in everyday tasks.',
    price: 72990,
    rating: 4.6,
    image: "images/realme.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/realme-note-70-6-gb-128-gb-zolotistyi-145564514/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 4,
    name: 'Xiaomi Redmi 13C',
    description: 'Premium smartphone with excellent camera and elegant design.',
    price: 59900,
    rating: 4.5,
    image: "images/xiaomi_redmi.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-belyi-114985314/?c=750000000',
    likes: 0,
    categoryId: 1
  },
  {
    id: 5,
    name: 'Honor 400 Lite',
    description: 'The HONOR 400 Lite 8GB/256GB is a stylish and powerful smartphone that will become your reliable everyday companion. Enjoy a vibrant 120Hz AMOLED display and a capacious 5230mAh battery .',
    price: 164370,
    rating: 4.7,
    image: "images/honor.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/honor-400-lite-8-gb-256-gb-chernyi-141492390/?c=750000000',
    likes: 0,
    categoryId: 1
  },

  //laptops

  {
    id: 6,
    name: 'Apple MacBook Air 13',
    description: 'Lightweight laptop with Apple Air 13 chip and Retina display.',
    price: 439980,
    rating: 4.9,
    image: "images/apple_macbook.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: 'Acer Aspire Laptop 16',
    description: 'Acer Aspire 16 a powerful and stylish laptop that is ideal for work and entertainment.',
    price: 280000,
    rating: 4.6,
    image: "images/acer.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/acer-aspire-16-16-gb-emmc-512-gb-win-11-pro-nx-j5rem-01c-al16-52p-135804242/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: 'Laptop HYDRA Home H14',
    description: 'Reliable laptop for work and study with Ryzen processor.',
    price: 115000,
    rating: 4.5,
    image: "images/hydra.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/hydra-home-h14-14-12-gb-ssd-256-gb-win-11-mkii-119496808/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 9,
    name: 'Huawei MateBook D16',
    description: 'Balanced performance laptop for daily tasks and multimedia.',
    price: 388965,
    rating: 4.4,
    image: "images/matebook.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/huawei-matebook-d16-16-16-gb-ssd-512-gb-win-11-home-mitchellg-w5651-115943541/?c=750000000',
    likes: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: 'Laptop ASUS Vivobook',
    description: 'Premium vivobook with compact design and powerful performance.',
    price: 397476,
    rating: 4.8,
    image: "images/asus_vivobook.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/asus-vivobook-16x-16-16-gb-ssd-512-gb-win-11-90nb1071-m00at0-129951243/?c=750000000',
    likes: 0,
    categoryId: 2
  },

  //headphones

  {
    id: 11,
    name: 'Apple AirPods Max',
    description: 'Wireless earbuds with active noise cancellation.',
    price: 425812,
    rating: 4.8,
    image: "images/airpods.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-chernyi-100950846/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 12,
    name: 'Sennheiser Momentum 4',
    description: 'Industry-leading noise cancelling headphones.',
    price: 398000,
    rating: 4.9,
    image: "images/momentum.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/naushniki-sennheiser-momentum-4-chernyi-114975824/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 13,
    name: 'Bowers & Wilkins Px7 S2e',
    description: 'Affordable headphones with solid bass and ANC.',
    price: 289980,
    rating: 4.5,
    image: "images/bowers.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/naushniki-bowers-wilkins-px7-s2e-chernyi-113732591/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 14,
    name: 'Samsung Galaxy Buds 2 Pro',
    description: 'Compact wireless earbuds with premium sound.',
    price: 182990,
    rating: 4.6,
    image: "images/buds_pro.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?c=750000000',
    likes: 0,
    categoryId: 3
  },
  {
    id: 15,
    name: 'JBL Tour One',
    description: 'Budget wireless earbuds with good battery life.',
    price: 209990,
    rating: 4.4,
    image: "images/jbl.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tour-one-chernyi-102788612/?c=750000000',
    likes: 0,
    categoryId: 3
  },

  //tablets

  {
    id: 16,
    name: 'Apple iPad A16',
    description: 'Modern iPad with large display and powerful chip.',
    price: 203318,
    rating: 4.8,
    image: "images/ipad.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 17,
    name: 'Huawei MatePad 11.5 S',
    description: 'High-end Android tablet with AMOLED display.',
    price: 259890,
    rating: 4.7,
    image: "images/matepad.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-s-2026-papermatte-podarok-11-5-djuim-12-gb-256-gb-zelenyi-154784583/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 18,
    name: 'Samsung Galaxy Tab A9',
    description: 'Powerful tablet for productivity and entertainment.',
    price: 113335,
    rating: 4.6,
    image: "images/galaxy_tab.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-sinii-113806822/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 19,
    name: 'Xiaomi Redmi Pad SE',
    description: 'Affordable tablet with strong performance.',
    price: 107703,
    rating: 4.5,
    image: "images/redmi_pad.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-8-gb-256-gb-seryi-113758800/?c=750000000',
    likes: 0,
    categoryId: 4
  },
  {
    id: 20,
    name: 'Samsung Galaxy Tab A9+',
    description: 'Large screen tablet ideal for study and streaming.',
    price: 179997,
    rating: 4.4,
    image: "images/samsung_tab.jpg",
    images: ['img1','img2','img3'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000',
    likes: 0,
    categoryId: 4
  }

];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}