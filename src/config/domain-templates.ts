/**
 * Domain-specific header templates for various streaming services
 * This allows for targeted anti-hotlinking bypass based on the domain
 */

import { URL } from 'url';

export interface DomainTemplate {
  // Domain pattern (can be exact or wildcard with *)
  pattern: string | RegExp;
  // Headers to set for this domain
  headers: Record<string, string>;
  // Optional function to further customize headers based on URL
  headersFn?: (url: URL) => Record<string, string>;
}

/**
 * Predefined header templates for known domains
 */
export const domainTemplates: DomainTemplate[] = [
  // Padorupado.ru
     
   {
    pattern: /\.padorupado\.ru$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://kwik.si',
        'referer': 'https://kwik.si/',
      };
    }
  },

  // Krussdomi.com
  {
    pattern: /krussdomi\.com$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  {
    pattern: /\.akamaized\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://bl.krussdomi.com',
        'referer': 'https://bl.krussdomi.com/',
      };
    }
  },

  {
    pattern: /\.megaup\.cc/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://megaup.cc',
        'referer': 'https://megaup.cc/',
      };
    }
  },

  {
    pattern: /\.nebulax-89\.biz/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://megaup.cc',
        'referer': 'https://megaup.cc/',
      };
    }
  },

    {
    pattern: /\.odyssey-19\.biz/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://megaup.cc',
        'referer': 'https://megaup.cc/',
      };
    }
  },
  
  
  {
    pattern: /\.anih1\.top$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://ee.anih1.top',
        'referer': 'https://ee.anih1.top/',
      };
    }
  },

  {
    pattern: /\.xyk3\.top$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://ee.anih1.top',
        'referer': 'https://ee.anih1.top/',
      };
    }
  },

  {
    pattern: /\.premilkyway\.com$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://uqloads.xyz',
        'referer': 'https://uqloads.xyz/',
      };
    }
  },

   // kwikie.ru
   {
    pattern: /\.kwikie\.ru$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://kwik.si',
        'referer': 'https://kwik.si/',
      };
    }
  },

  // Revolutionizingtheweb.xyz
  {
    pattern: /revolutionizingtheweb\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // nextgentechnologytrends.xyz
  {
    pattern: /nextgentechnologytrends\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // smartinvestmentstrategies.xyz
  {
    pattern: /smartinvestmentstrategies\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // creativedesignstudioxyz.xyz
  {
    pattern: /creativedesignstudioxyz\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // breakingdigitalboundaries.xyz
  {
    pattern: /breakingdigitalboundaries\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // ultimatetechinnovation.xyz
  {
    pattern: /ultimatetechinnovation\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // ultimatetechinnovation.xyz
  {
    pattern: /raffaellocdn\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://kerolaunochan.online',
        'referer': 'https://kerolaunochan.online/',
      };
    }
  },
  
  // dewbreeze84.online
  {
    pattern: /dewbreeze84\.online$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://megacloud.blog',
        'referer': 'https://megacloud.blog/',
      };
    }
  },

  // mistyvalley31.live
  {
    pattern: /mistyvalley31\.live$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://megacloud.blog',
        'referer': 'https://megacloud.blog/',
      };
    }
  },

    // mistyvalley31.live
    {
      pattern: /lightningspark77\.pro$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },
  
    // clearskydrift45.site
    {
      pattern: /clearskydrift45\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://kerolaunochan.online',
          'referer': 'https://kerolaunochan.online/',
        };
      }
    },
  
    // thunderwave48.xyz
    {
      pattern: /thunderwave48\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // stormwatch95.site
    {
      pattern: /stormwatch95\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // windyrays29.online
    {
      pattern: /windyrays29\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },
  
    // mistyvalley31.live
    {
      pattern: /thunderstrike77\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // mistyvalley31.live
    {
      pattern: /lightningflash39\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // mistyvalley31.live
    {
      pattern: /cloudburst82\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // drizzleshower19.site
    {
      pattern: /drizzleshower19\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // vmeas.cloud
    {
      pattern: /vmeas\.cloud$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://vidmoly.to',
          'referer': 'https://vidmoly.to/',
        };
      }
    },
    
    // nextwaveinitiative
    {
      pattern: /nextwaveinitiative\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://edgedeliverynetwork.org',
          'referer': 'https://edgedeliverynetwork.org/',
        };
      }
    },

    // shadowlandschronicles
    {
      pattern: /shadowlandschronicles\.com$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://edgedeliverynetwork.org',
          'referer': 'https://edgedeliverynetwork.org/',
        };
      }
    },

    // lightningbolts.ru
    {
      pattern: /lightningbolts\.ru$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://vidsrc.cc',
          'referer': 'https://vidsrc.cc/',
        };
      }
    },


    // lightningbolt.site
    {
      pattern: /lightningbolt\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://vidsrc.cc',
          'referer': 'https://vidsrc.cc/',
        };
      }
    },

    // vidlvod.store
    {
      pattern: /vidlvod\.store$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://vidlink.pro',
          'referer': 'https://vidlink.pro/',
        };
      }
    },

    // vyebzzqlojvrl.top
    {
      pattern: /vyebzzqlojvrl\.top$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://vidsrc.cc',
          'referer': 'https://vidsrc.cc/',
        };
      }
    },

    // sunnybreeze16.live
    {
      pattern: /sunnybreeze16\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.store',
          'referer': 'https://megacloud.store/',
        };
      }
    },

    // 1stkmgv1.cloud
    {
      pattern: /1stkmgv1\.com$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://vidmoly.to',
          'referer': 'https://vidmoly.to/',
        };
      }
    },

    // rainstorm92.xyz
    {
      pattern: /rainstorm92\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

  // cloudydrift38.site
  {
    pattern: /cloudydrift38\.site$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://megacloud.blog',
        'referer': 'https://megacloud.blog/',
      };
    }
  },

    // sunshinerays93.live
    {
      pattern: /sunshinerays93\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // sunburst66.pro
    {
      pattern: /sunburst66\.pro$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

        // clearbluesky72.wiki
        {
          pattern: /clearbluesky72\.wiki$/i,
          headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.5',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
          },
          headersFn: (url: URL) => {
            return {
              'origin': 'https://megacloud.blog',
              'referer': 'https://megacloud.blog/',
            };
          }
        },
    

    // breezygale56.online
    {
      pattern: /breezygale56\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // frostbite27.pro
    {
      pattern: /frostbite27\.pro$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // frostywinds57.live
    {
      pattern: /frostywinds57\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // icyhailstorm64.wiki
    {
      pattern: /icyhailstorm64\.wiki$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // icyhailstorm29.online
    {
      pattern: /icyhailstorm29\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    
    // windflash93.xyz
    {
      pattern: /windflash93\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // stormdrift27.site
    {
      pattern: /stormdrift27\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // tempestcloud61.wiki
    {
      pattern: /tempestcloud61\.wiki$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },
    
    // feetcdn.com
    {
      pattern: /\.feetcdn\.com$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://kerolaunochan.online',
          'referer': 'https://kerolaunochan.online/',
        };
      }
    },

    // raffaellocdn.net
    {
      pattern: /\.raffaellocdn\.net$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://kerolaunochan.online',
          'referer': 'https://kerolaunochan.online/',
        };
      }
    },

    // heatwave90.pro
    {
      pattern: /heatwave90\.pro$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },

    // humidmist27.wiki
    {
      pattern: /humidmist27\.wiki$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },

    // frozenbreeze65.live
    {
      pattern: /frozenbreeze65\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },

    // drizzlerain73.online
    {
      pattern: /drizzlerain73\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },


    // sunrays81.xyz
    {
      pattern: /sunrays81\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url: URL) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },

    {
    pattern: /embed\.su$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://embed.su',
        'referer': 'https://embed.su/',
      };
    }
  },

  {
    pattern: /usbigcdn\.cc$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://embed.su',
        'referer': 'https://embed.su/',
      };
    }
  },

  {
    pattern: /\.congacdn\.cc$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url: URL) => {
      return {
        'origin': 'https://embed.su',
        'referer': 'https://embed.su/',
      };
    }
  },
  
  // Akamai CDN
  {
    pattern: /\.akamaized\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'origin': 'https://players.akamai.com',
      'referer': 'https://players.akamai.com/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    }
  },
  
  // Cloudfront CDN
  {
    pattern: /\.cloudfront\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'origin': 'https://d2zihajmogu5jn.cloudfront.net',
      'referer': 'https://d2zihajmogu5jn.cloudfront.net/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    }
  },

  // twitch CDN
  {
    pattern: /\.ttvnw\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'origin': 'https://www.twitch.tv',
      'referer': 'https://www.twitch.tv/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    }
  },

  // twitch CDN
  {
    pattern: /\.xx.fbcdn\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'origin': 'https://www.facebook.com',
      'referer': 'https://www.facebook.com/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    }
  },

     // vkcdn5.com
     {
        pattern: /\.vkcdn5\.com$/i,
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.5',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
        },
        headersFn: (url: URL) => {
          return {
            'origin': 'https://vkspeed.com',
            'referer': 'https://vkspeed.com/',
          };
        }
      },
  
  // General default template
  {
    pattern: /.*/,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    }
  }
];

/**
 * Find the appropriate template for a given URL
 * @param url URL object to match against templates
 * @returns The matching domain template
 */
export function findTemplateForDomain(url: URL): DomainTemplate {
  const hostname = url.hostname;
  
  for (const template of domainTemplates) {
    if (typeof template.pattern === 'string') {
      // String pattern could be exact or with wildcard (*)
      const pattern = template.pattern.replace(/\*/g, '.*');
      if (new RegExp(pattern).test(hostname)) {
        return template;
      }
    } else if (template.pattern.test(hostname)) {
      // RegExp pattern
      return template;
    }
  }
  
  // Return the last template (general default) if no match
  return domainTemplates[domainTemplates.length - 1];
}

/**
 * Generate headers for a specific URL based on templates
 * @param url URL to generate headers for
 * @returns Headers for the URL
 */
export function generateHeadersForUrl(url: URL): Record<string, string> {
  const template = findTemplateForDomain(url);
  
  // Start with template headers
  const headers = { ...template.headers };
  
  // Apply custom header function if available
  if (template.headersFn) {
    const customHeaders = template.headersFn(url);
    Object.assign(headers, customHeaders);
  }
  
  return headers;
}

export default {
  domainTemplates,
  findTemplateForDomain,
  generateHeadersForUrl
};
