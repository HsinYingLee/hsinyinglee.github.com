const publications = [
{
    imageUrl: "images/cvpr25_4realvideo.gif",
    title: "4Real-Video: Learning Generalizable Photo-realistic 4D Video Diffusion",
    description: "",
    authors: "Chaoyang Wang, Peiye Zhuang, Tuan Duc Ngo, Willi Menapace, Aliaksandr Siarohin, Michael Vasilkovsky, Ivan Skorokhodov, Sergey Tulyakov, Peter Wonka, Hsin-Ying Lee",
    venue: "CVPR 2025 (Highlight)",
    links: [
      { url: "https://arxiv.org/pdf/2412.04462", text: "Paper" },
      { url: "https://snap-research.github.io/4Real-Video/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/cvpr25_preditor3d.svg",
    title: "PrEditor3D: Fast and Precise 3D Shape Editing",
    description: "",
    authors: "Ziya Erkoç, Can Gümeli, Chaoyang Wang, Matthias Nießner, Angela Dai, Peter Wonka, Hsin-Ying Lee, Peiye Zhuang",
    venue: "CVPR 2025",
    links: [
      { url: "https://arxiv.org/pdf/2412.06592", text: "Paper" },
      { url: "https://ziyaerkoc.com/preditor3d/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/cvpr25_uniphy.png",
    title: "UniPhy: Learning a Unified Constitutive Model for Inverse Physics Simulation",
    description: "",
    authors: "Himangi Mittal, Peiye Zhuang, Hsin-Ying Lee, Shubham Tulsiani",
    venue: "CVPR 2025",
    links: [
      { url: "https://openreview.net/pdf?id=LWd3njmIQd", text: "Paper" },
    ],
    category: "3d"
  },
  {
    imageUrl: "images/iclr25_delta.gif",
    title: "DELTA: Dense Efficient Long-range 3D Tracking for Any video",
    description: "",
    authors: "Tuan Duc Ngo, Peiye Zhuang, Evangelos Kalogerakis, Chuang Gan, Sergey Tulyakov, Hsin-Ying Lee, Chaoyang Wang",
    venue: "ICLR 2025",
    links: [
      { url: "https://arxiv.org/abs/2410.24211", text: "Paper" },
      { url: "https://snap-research.github.io/DELTA/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/iclr25_vd3d.gif",
    title: "VD3D: Taming Large Video Diffusion Transformers for 3D Camera Control",
    description: "",
    authors: "Sherwin Bahmani, Ivan Skorokhodov, Aliaksandr Siarohin, Willi Menapace, Guocheng Qian, Michael Vasilkovsky, Hsin-Ying Lee, Chaoyang Wang, Jiaxu Zou, Andrea Tagliasacchi, David B. Lindell, Sergey Tulyakov",
    venue: "ICLR 2025",
    links: [
      { url: "https://arxiv.org/abs/2407.12781", text: "Paper" },
      { url: "https://snap-research.github.io/vd3d/", text: "Project" }
    ],
    category: "video"
  },
  {
    imageUrl: "images/iclr25_gtr.gif",
    title: "GTR: Improving Large 3D Reconstruction Models through Geometry and Texture Refinement",
    description: "",
    authors: "Peiye Zhuang, Songfang Han, Chaoyang Wang, Aliaksandr Siarohin, Jiaxu Zou, Michael Vasilkovsky, Vladislav Shakhrai, Sergei Korolev, Sergey Tulyakov, Hsin-Ying Lee",
    venue: "ICLR 2025",
    links: [
      { url: "https://openreview.net/pdf?id=Oxpkn0YLG1", text: "Paper" },
      { url: "https://snap-research.github.io/GTR/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/iclr25_3ditscene.gif",
    title: "3DitScene: Editing Any Scene via Language-guided Disentangled Gaussian Splatting",
    description: "",
    authors: "Qihang Zhang, Yinghao Xu, Chaoyang Wang, Hsin-Ying Lee, Gordon Wetzstein, Bolei Zhou, Ceyuan Yang",
    venue: "ICLR 2025",
    links: [
      { url: "https://arxiv.org/abs/2405.18424", text: "Paper" },
      { url: "https://zqh0253.github.io/3DitScene/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/nips24_4real.gif",
    title: "4Real: Towards Photorealistic 4D Scene Generation via Video Diffusion Models",
    description: "",
    authors: "Heng Yu, Chaoyang Wang, Peiye Zhuang, Willi Menapace, Aliaksandr Siarohin, Junli Cao, Laszlo A Jeni, Sergey Tulyakov, Hsin-Ying Lee",
    venue: "NeurIPS 2024",
    links: [
      { url: "https://arxiv.org/abs/2406.07472", text: "Paper" },
      { url: "https://snap-research.github.io/4Real/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/eccv24_upfusion.gif",
    title: "UpFusion: Novel View Diffusion from Unposed Sparse View Observations",
    description: "",
    authors: "Bharath Raj Nagoor Kani, Hsin-Ying Lee, Sergey Tulyakov, Shubham Tulsiani",
    venue: "ECCV 2024",
    links: [
      { url: "https://arxiv.org/pdf/2312.06661", text: "Paper" },
      { url: "https://upfusion3d.github.io/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/cvpr24_scenetex.gif",
    title: "Scenetex: High-quality texture synthesis for indoor scenes via diffusion priors",
    description: "",
    authors: "Dave Zhenyu Chen, Haoxuan Li, Hsin-Ying Lee, Sergey Tulyakov, Matthias Nießner",
    venue: "CVPR 2024 (Spotlight)",
    links: [
      { url: "https://daveredrum.github.io/SceneTex/static/SceneTex.pdf", text: "Paper" },
      { url: "https://daveredrum.github.io/SceneTex/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/cvpr24_panda.png",
    title: "Panda-70M: Captioning 70M Videos with Multiple Cross-Modality Teachers",
    description: "",
    authors: "Tsai-Shien Chen, Aliaksandr Siarohin, Willi Menapace, Ekaterina Deyneka, Hsiang-wei Chao, Byung Eun Jeon, Yuwei Fang, Hsin-Ying Lee, Jian Ren, Ming-Hsuan Yang, Sergey Tulyakov",
    venue: "CVPR 2024",
    links: [
      { url: "https://arxiv.org/abs/2402.19479", text: "Paper" },
      { url: "https://snap-research.github.io/Panda-70M/", text: "Project" }
    ],
    category: "video"
  },
  {
    imageUrl: "images/cvpr24_scenewiz.gif",
    title: "Scenewiz3d: Towards text-guided 3d scene composition",
    description: "",
    authors: "Qihang Zhang, Chaoyang Wang, Aliaksandr Siarohin, Peiye Zhuang, Yinghao Xu, Ceyuan Yang, Dahua Lin, Bolei Zhou, Sergey Tulyakov, Hsin-Ying Lee",
    venue: "CVPR 2024",
    links: [
      { url: "https://zqh0253.github.io/SceneWiz3D/media/scenewiz3d.pdf", text: "Paper" },
      { url: "https://zqh0253.github.io/SceneWiz3D/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/cvpr24_dmp.png",
    title: "Exploiting Diffusion Prior for Generalizable Pixel-Level Semantic Prediction",
    description: "",
    authors: "Hsin-Ying Lee, Hsin-Ying Lee, Hung-Yu Tseng, Ming-Hsuan Yang",
    venue: "CVPR 2024",
    links: [
      { url: "https://arxiv.org/abs/2311.18832", text: "Paper" },
      { url: "https://shinying.github.io/dmp/", text: "Project" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/iclr24_magic123.gif",
    title: "Magic123: One Image to High-Quality 3D Object Generation Using Both 2D and 3D Diffusion Priors",
    description: "",
    authors: "Guocheng Qian, Jinjie Mai, Abdullah Hamdi, Jian Ren, Aliaksandr Siarohin, Bing Li, Hsin-Ying Lee, Ivan Skorokhodov, Peter Wonka, Sergey Tulyakov, Bernard Ghanem",
    venue: "ICLR 2024",
    links: [
      { url: "https://arxiv.org/abs/2306.17843", text: "Paper" },
      { url: "https://guochengqian.github.io/project/magic123/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/siggraphasia23_text2cine.gif",
    title: "Text-Guided Synthesis of Eulerian Cinemagraphs",
    description: "",
    authors: "Aniruddha Mahapatra, Aliaksandr Siarohin, Hsin-Ying Lee, Sergey Tulyakov, Jun-Yan Zhu",
    venue: "SIGGRAPH Asia 2023",
    links: [
      { url: "https://arxiv.org/abs/2307.03190", text: "Paper" },
      { url: "https://text2cinemagraph.github.io/website/", text: "Project" }
    ],
    category: "video"
  },
  {
    imageUrl: "images/iccv23_text2tex.jpeg",
    title: "Text2tex: Text-driven texture synthesis via diffusion models",
    description: "",
    authors: "Dave Zhenyu Chen, Yawar Siddiqui, Hsin-Ying Lee, Sergey Tulyakov, Matthias Nießner",
    venue: "ICCV 2023",
    links: [
      { url: "https://arxiv.org/abs/2303.11396", text: "Paper" },
      { url: "https://daveredrum.github.io/Text2Tex/", text: "Project" }
    ],
    category: "2d"
  },
  {
    imageUrl: "images/iccv23_infinicity.jpeg",
    title: "InfiniCity: Infinite-Scale City Synthesis",
    description: "",
    authors: "Chieh Hubert Lin, Hsin-Ying Lee, Willi Menapace, Menglei Chai, Aliaksandr Siarohin, Ming-Hsuan Yang, Sergey Tulyakov",
    venue: "ICCV 2023",
    links: [
      { url: "https://arxiv.org/abs/2301.09637", text: "Paper" },
      { url: "https://hubert0527.github.io/infinicity/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/iclr23_ppp.png",
    title: "Unveiling The Mask of Position-Information Pattern Through the Mist of Image Features",
    description: "",
    authors: "Chieh Hubert Lin, Hung-Yu Tseng, Hsin-Ying Lee, Maneesh Kumar Singh, Ming-Hsuan Yang",
    venue: "ICML 2023",
    links: [
      { url: "https://proceedings.mlr.press/v202/lin23k/lin23k.pdf", text: "Paper" }
    ],
    category: "other"
  },
  {
    imageUrl: "images/cvpr23_3DAvatargan.gif",
    title: "3DAvatarGAN: Bridging Domains for Personalized Editable Avatars",
    description: "",
    authors: "Rameen Abdal, Hsin-Ying Lee, Peihao Zhu, Menglei Chai, Aliaksandr Siarohin, Peter Wonka, Sergey Tulyakov",
    venue: "CVPR 2023",
    links: [
      { url: "https://arxiv.org/abs/2301.02700", text: "Paper" },
      { url: "https://rameenabdal.github.io/3DAvatarGAN/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/cvpr23_sdfusion.png",
    title: "SDFusion: Multimodal 3D Shape Completion, Reconstruction, and Generation",
    description: "",
    authors: "Yen-Chi Cheng, Hsin-Ying Lee, Sergey Tulyakov, Alexander Schwing, Liangyan Gui",
    venue: "CVPR 2023",
    links: [
      { url: "https://arxiv.org/abs/2212.04493", text: "Paper" },
      { url: "https://yccyenchicheng.github.io/SDFusion/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/cvpr23_makeastory.png",
    title: "Make-A-Story: Visual Memory Conditioned Consistent Story Generation",
    description: "",
    authors: "Tanzila Rahman, Hsin-Ying Lee, Jian Ren, Sergey Tulyakov, Shweta Mahajan, Leonid Sigal",
    venue: "CVPR 2023",
    links: [
      { url: "https://arxiv.org/abs/2211.13319", text: "Paper" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/cvpr23_discoscene.jpeg",
    title: "DiscoScene: Spatially Disentangled Generative Radiance Field for Controllable 3D-aware Scene Synthesis",
    description: "",
    authors: "Yinghao Xu, Menglei Chai, Zifan Shi, Sida Peng, Ivan Skorokhodov, Aliaksandr Siarohin, Ceyuan Yang, Yujun Shen, Hsin-Ying Lee, Bolei Zhou, Sergey Tulyakov",
    venue: "CVPR 2023 (Highlight)",
    links: [
      { url: "https://snap-research.github.io/discoscene/contents/discoscene.pdf", text: "Paper" },
      { url: "https://snap-research.github.io/discoscene/", text: "Project" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/uva.png",
    title: "Unsupervised Volumetric Animation",
    description: "",
    authors: "Aliaksandr Siarohin, Willi Menapace, Ivan Skorokhodov, Kyle Olszewski, Jian Ren, Hsin-Ying Lee, Menglei Chai, Sergey Tulyakov",
    venue: "CVPR 2023",
    links: [
      { url: "https://arxiv.org/abs/2301.11326", text: "Paper" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/iclr23_3dgp.png",
    title: "3D Generation on ImageNet",
    description: "",
    authors: "Ivan Skorokhodov, Aliaksandr Siarohin, Yinghao Xu, Jian Ren, Hsin-Ying Lee, Peter Wonka, Sergey Tulyakov",
    venue: "ICLR 2023 (oral)",
    links: [
      { url: "https://openreview.net/forum?id=U2WjB9xxZ9q", text: "Paper" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/cm3d.png",
    title: "Cross-Modal 3D Shape Generation and Manipulation",
    description: "",
    authors: "Zezhou Cheng, Menglei Chai, Jian Ren, Hsin-Ying Lee, Kyle Olszewski, Zeng Huang, Subhransu Maji, Sergey Tulyakov",
    venue: "ECCV 2022",
    links: [
      { url: "https://people.cs.umass.edu/~zezhoucheng/edit3d/", text: "Project" },
      { url: "https://arxiv.org/abs/2207.11795", text: "Paper" }
    ],
    category: "3d"
  },
  {
    imageUrl: "images/eccv22_vqi2i.png",
    title: "Vector Quantized Image-to-Image Translation",
    description: "",
    authors: "Yu-Jie Chen, Shin-I Cheng, Wei-Chen Chiu, Hung-Yu Tseng, Hsin-Ying Lee",
    venue: "ECCV 2022",
    links: [
      { url: "https://github.com/cyj407/VQ-I2I", text: "Project" },
      { url: "https://arxiv.org/abs/2205.07680", text: "Paper" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/eccv22_mmvid.gif",
    title: "Show Me What and Tell Me How: Video Synthesis via Multimodal Conditioning",
    description: "",
    authors: "Ligong Han, Jian Ren, Hsin-Ying Lee, Francesco Barbieri, Kyle Olszewski, Shervin Minaee, Dimitris Metaxas, Sergey Tulyakov",
    venue: "ECCV 2022",
    links: [
      { url: "https://github.com/snap-research/MMVID", text: "Project" },
      { url: "https://arxiv.org/abs/2203.02573", text: "Paper" }
    ],
    category: "video"
  },
  {
    imageUrl: "images/cvpr22_inout.png",
    title: "In&Out: Diverse Image Outpainting via GAN Inversion",
    description: "",
    authors: "Yen-Chi Cheng, Chieh Hubert Lin, Hsin-Ying Lee, Jian Ren, Sergey Tulyakov, Ming-Hsuan Yang",
    venue: "CVPR 2022",
    links: [
      { url: "https://yccyenchicheng.github.io/InOut/", text: "Project" },
      { url: "https://arxiv.org/abs/2104.00675", text: "Paper" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/iclr22_infinityGAN.png",
    title: "InfinityGAN: Towards Infinite-Resolution Image Synthesis",
    description: "",
    authors: "Chieh Hubert Lin, Hsin-Ying Lee, Yen-Chi Cheng, Sergey Tulyakov, Ming-Hsuan Yang",
    venue: "ICLR 2022",
    links: [
      { url: "https://hubert0527.github.io/infinityGAN/", text: "Project" },
      { url: "https://arxiv.org/abs/2104.03963", text: "Paper" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/nips21_avvp.png",
    title: "Exploring Cross-Video and Cross-Modality Signals for Weakly-Supervised Audio-Visual Video Parsing",
    description: "",
    authors: "Yan-Bo Lin, Hung-Yu Tseng, Hsin-Ying Lee, Yen-Yu Lin, and Ming-Hsuan Yang",
    venue: "NeurIPS 2021",
    links: [
      { url: "https://github.com/GenjiB/CM-Co-Occurrence-AVVP", text: "Project" },
      { url: "https://openreview.net/pdf?id=V5V1vGrI2z", text: "Paper" }
    ],
    category: "other"
  },
  {
    imageUrl: "images/ijcv20_sav.png",
    title: "Continuous and Diverse Image-to-Image Translation via Signed Attribute Vectors",
    description: "",
    authors: "Qi Mao, Hung-Yu Tseng, Hsin-Ying Lee, Jia-Bin Huang, Siwei Ma, Ming-Hsuan Yang",
    venue: "IJCV 2020",
    links: [
      { url: "https://arxiv.org/abs/2011.01215", text: "Paper" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/RetrieveGAN.png",
    title: "RetrieveGAN: Image Synthesis via Differentiable Patch Retrieval",
    description: "",
    authors: "Hung-Yu Tseng, Hsin-Ying Lee, Lu Jiang, Ming-Hsuan Yang, Weilong Yang",
    venue: "ECCV 2020",
    links: [
      { url: "https://arxiv.org/abs/2007.08513", text: "Paper" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/SegVAE.png",
    title: "Controllable Image Synthesis via SegVAE",
    description: "",
    authors: "Yen-Chi Cheng, Hsin-Ying Lee, Min Sun, Ming-Hsuan Yang",
    venue: "ECCV 2020",
    links: [
      { url: "https://arxiv.org/abs/2007.08397", text: "Paper" },
      { url: "https://github.com/yccyenchicheng/SegVAE", text: "Code" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/SemanticViewSyn.png",
    title: "Semantic View Synthesis",
    description: "",
    authors: "Hsin-Ping Huang, Hung-Yu Tseng, Hsin-Ying Lee, Jia-Bin Huang",
    venue: "ECCV 2020",
    links: [
      { url: "https://arxiv.org/abs/2008.10598", text: "Paper" },
      { url: "https://github.com/hhsinping/svs", text: "Code" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/paper_layout.png",
    title: "Neural Design Network: Graphic Layout Generation with Constraints",
    description: "",
    authors: "Hsin-Ying Lee, Weilong Yang, Lu Jiang, Madison Le, Irfan Essa, Haifeng Gong, Ming-Hsuan Yang",
    venue: "ECCV 2020 (spotlight)",
    links: [
      { url: "https://arxiv.org/abs/1912.09421", text: "Paper" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/paper_iclr.png",
    title: "Cross-Domain Few-Shot Classification via Learned Feature-Wise Transformation",
    description: "",
    authors: "Hung-Yu Tseng, Hsin-Ying Lee, Jia-Bin Huang, Ming-Hsuan Yang",
    venue: "ICLR 2020",
    links: [
      { url: "https://openreview.net/pdf?id=SJl5Np4tPr", text: "Paper" },
      { url: "https://github.com/hytseng0509/CrossDomainFewShot", text: "Code" }
    ],
    category: "other"
  },
  {
    imageUrl: "images/nips19_dance.gif",
    title: "Dancing to Music",
    description: "",
    authors: "Hsin-Ying Lee, Xiaodong Yang, Ming-Yu Liu, Ting-Chun Wang, Yu-Ding Lu, Ming-Hsuan Yang, Jan Kautz",
    venue: "NeurIPS 2019",
    links: [
      { url: "https://arxiv.org/abs/1911.02001", text: "Paper" },
      { url: "https://github.com/NVlabs/Dancing2Music", text: "Code" },
      { url: "https://hsinyinglee.com/Project_page/Dancing2Music/script.txt", text: "Script for data and models" },
      { url: "https://hsinyinglee.com/Project_page/Dancing2Music/demo.zip", text: "Demo code" }
    ],
    category: "video"
  },
  {
    imageUrl: "images/audioSpatial.png",
    title: "Self-supervised Audio Spatialization with Correspondence Classifier",
    description: "",
    authors: "Yu-Ding Lu, Hsin-Ying Lee, Hung-Yu Tseng, Ming-Hsuan Yang",
    venue: "ICIP 2019",
    links: [
      { url: "https://arxiv.org/pdf/1905.05375.pdf", text: "Paper" }
    ],
    category: "other"
  },
  {
    imageUrl: "images/cvpr19_MSGAN.jpg",
    title: "Mode Seeking Generative Adversarial Networks for Diverse Image Synthesis",
    description: "",
    authors: "Qi Mao*, Hsin-Ying Lee*, Hung-Yu Tseng*, Siwei Ma, and Ming-Hsuan Yang",
    venue: "CVPR 2019",
    links: [
      { url: "https://arxiv.org/abs/1903.05628", text: "Paper" },
      { url: "https://github.com/HelenMao/MSGAN", text: "Code" }
    ],
    category: "image"
  },
  {
    imageUrl: "DRIT/images/final.gif",
    title: "Diverse Image-to-Image Translation via Disentangled Representations",
    description: "",
    authors: "Hsin-Ying Lee*, Hung-Yu Tseng*, Jia-Bin Huang, Maneesh Kumar Singh, and Ming-Hsuan Yang",
    venue: "ECCV 2018 (oral), IJCV 2019",
    links: [
      { url: "https://arxiv.org/abs/1808.00948", text: "Paper (conference)" },
      { url: "https://arxiv.org/abs/1905.01270", text: "Paper (journal)" },
      { url: "https://hsinyinglee.com/Project_page/DRIT/", text: "Project Page" },
      { url: "https://github.com/HsinYingLee/DRIT", text: "Code" }
    ],
    category: "image"
  },
  {
    imageUrl: "images/paper_subgan.png",
    title: "Sub-GAN: An Unsupervised Generative Model via Subspaces",
    description: "",
    authors: "Jie Liang, Jufeng Yang, Hsin-Ying Lee, Kai Wang, and Ming-Hsuan Yang",
    venue: "ECCV 2018",
    links: [
      { url: "http://faculty.ucmerced.edu/mhyang/papers/eccv2018_subgan.pdf", text: "Paper" }
    ],
    category: "image"
  },
  {
    imageUrl: "VideoHighlights/GIF/3iTmL5fmJRo/0.gif",
    title: "Video Highlights Using Retention Stats",
    description: "",
    authors: "Hsin-Ying Lee, Min-Hsuan Tsai, Zheng Sun, and Weilong Yang",
    venue: "",
    links: [
      { url: "https://hsinyinglee.com/Project_page/VideoHighlights/", text: "Demo Page" }
    ],
    category: "video"
  },
  {
    imageUrl: "OPN/images/sorting.gif",
    title: "Unsupervised Representation Learning by Sorting Sequences",
    description: "",
    authors: "Hsin-Ying Lee, Jia-Bin Huang, Maneesh Kumar Singh, and Ming-Hsuan Yang",
    venue: "ICCV 2017",
    links: [
      { url: "https://arxiv.org/abs/1708.01246", text: "Paper" },
      { url: "https://hsinyinglee.com/Project_page/OPN/", text: "Project Page" },
      { url: "http://github.com/HsinYingLee/OPN", text: "Code" }
    ],
    category: "other"
  },
  {
    imageUrl: "images/paper_dac.png",
    title: "Graph-Based Logic Bit Slicing for Datapath-Aware Placement",
    description: "",
    authors: "Chau-Chin Huang, Bo-Qiao Lin, Hsin-Ying Lee, Yao-Wen Chang, Kuo-Sheng Wu, and Jun-Zhi Yang",
    venue: "DAC 2017",
    links: [
      { url: "https://ieeexplore.ieee.org/document/8060443", text: "Paper" }
    ],
    category: "other"
  },
  {
    imageUrl: "images/paper_deblur.png",
    title: "Soft-Segmentation Guided Object Motion Deblurring",
    description: "",
    authors: "Jinshan Pan, Zhe Hu, Hsin-Ying Lee, and Ming-Hsuan Yang",
    venue: "CVPR 2016",
    links: [
      { url: "https://pdfs.semanticscholar.org/8f34/d07c4490f00a6ee658d902e723eb3797f026.pdf", text: "PDF" }
    ],
    category: "other"
  },
  {
    imageUrl: "images/paper_placement.png",
    title: "Detailed-routability-driven analytical placement for mixed-size designs with technology and region constraints",
    description: "",
    authors: "Chau-Chin Huang, Hsin-Ying Lee, Bo-Qiao Lin, Sheng-Wei Yang, Chin-Hao Chang, Szu-To Chen, Yao-Wen Chang",
    venue: "ICCAD 2015",
    links: [
      { url: "http://media.wix.com/ugd/4e32a1_c25daca77a7d433bb7562ceb0a612c67.pdf", text: "PDF" },
      { url: "http://www.ispd.cc/contests/15/ispd2015contest.html", text: "Contest Page" }
    ],
    category: "other"
  },
  {
    imageUrl: "images/paper_d2d.png",
    title: "Bio-inspired proximity discovery and synchronization for D2D communications",
    description: "",
    authors: "Shih-Lung Chao, Hsin-Ying Lee, Ching-Chun Chou, Hung-Yu Wei",
    venue: "IEEE communications letters, 2013",
    links: [
      { url: "http://media.wix.com/ugd/4e32a1_9e374e2f28cd4422b63002238b184f91.pdf", text: "PDF" }
    ],
    category: "other"
  }
];

// Initialize publications
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('publications-container');
  const categoryBtns = document.querySelectorAll('.category-btn');

  // Render function with container as parameter
  function renderPublications(pubs) {
    container.innerHTML = '';
    pubs.forEach(pub => {
      const pubHTML = `
        <div class="pubwrap">
          <div class="row">
            <div class="col l4 m6 s12">
              <div class="pubimg">
                <img src="${pub.imageUrl}">
              </div>
            </div>
            <div class="col l8 m6 s12">
              <div class="pub">
                <div class="pubt">${pub.title}</div>
                <div class="pubd">${pub.description}</div>
                <div class="puba">${pub.authors}</div>
                <div class="pubv">${pub.venue}</div>
                <div class="publ">
                  <ul>
                    ${pub.links.map(link => 
                      `<li><a href="${link.url}" target="_blank">${link.text}</a></li>`
                    ).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += pubHTML;
    });
  }

  // Initial render
  renderPublications(publications);

  // Set up click handlers
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter and render
      const category = btn.dataset.category;
      const filteredPubs = category === 'all' 
        ? publications 
        : publications.filter(pub => pub.category === category);
      
      renderPublications(filteredPubs);
    });
  });
}); 