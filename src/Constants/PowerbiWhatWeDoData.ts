export interface PowerbiService {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  bgGradient?: string;
}

export const PowerbiWhatWeDoData: PowerbiService[] = [
  {
    title: "Power BI Integration",
    description:
      "Our power BI contractors design, build, and deploy power BI to make it a feature-pocked tool for your business needs that delivers value for your teams from first day itself with more actionable insights.",
    image: "/src/assets/images/powerbi-integration.png",
    bgGradient: "bg-gradient-to-r from-[#000017] to-gray-900", // Deep Navy
  },
  {
    title: "Power BI Implementation",
    description:
      "We use the result to prepare the implementation roadmap, set up and roll out Power BI in incremental and transparent stages. Our BI and analytics consultants start by delivering comprehensive business analysis services along with an end-to end technology assessment.",
    image: "/src/assets/images/powerbi-implementation.png",
    reverse: true,
    bgGradient: "bg-gradient-to-r from-red-900 via-red-700 to-red-500", // Red gradient
  },
  {
    title: "Power BI Development",
    description:
      "We also offer services of integrating power BI visualizations into your external portals to help you make your embedded power BI analytics visible to your partners and vendors who don’t use the platform.",
    image: "/src/assets/images/powerbi-development.png",
    bgGradient: "bg-gradient-to-r from-indigo-900 to-purple-800", // Rich Purple/Indigo
  },
  {
    title: "Power BI Customization",
    description:
      "We deliver full-scale report and dashboard customization to help you get a multi-dimensional perspective of all your data sets while staying within your branded environment.",
    image: "/src/assets/images/powerbi-customization.png",
    reverse: true,
    bgGradient: "bg-gradient-to-r from-gray-800 to-gray-600", // Elegant Gray
  },
];
