import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

const title = {
  orderly: "Orderly",
  proclaimer: "Proclaimer",
};

export const vitePWAConfigBase = (_filename, dirname) => {
  return defineConfig(({ mode }) => {
    const ENV = loadEnv(mode, process.cwd(), "");

    return {
      define: {
        BUILD_TIME: new Date(),
        "import.meta.env.BUILD_TIME": JSON.stringify(new Date().getTime()),
        IS_ORDERLY_APP: ENV.VITE_APP_NAME === "orderly",
      },
      publicDir: "public/" + ENV.VITE_APP_NAME,
      plugins: [
        react(),
        VitePWA({
          devOptions: {
            enabled: true,
          },
          registerType: "prompt",
          injectRegister: "auto",
          manifest: {
            short_name: title[ENV.VITE_APP_NAME],
            name: title[ENV.VITE_APP_NAME],
            icons: [
              {
                src: "assets/manifest-icon-192.maskable.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
              },
              {
                src: "assets/manifest-icon-192.maskable.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
              },
              {
                src: "assets/manifest-icon-512.maskable.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
              },
              {
                src: "assets/manifest-icon-512.maskable.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
              },
            ],
            start_url: ".",
            display: "standalone",
            theme_color: "#ffffff",
            background_color: "#ffffff",
          },
          workbox: {
            runtimeCaching: [
              // {
              //   urlPattern: /.*/,
              //   handler: "CacheFirst",
              //   options: {
              //     cacheName: "everything",
              //     expiration: {
              //       // maxEntries: 500,
              //       maxAgeSeconds: 60 * 60 * 24 * 90, // 90 Days
              //     },
              //   },
              // },
              // {
              //   urlPattern: /.*\.pbf/,
              //   handler: "CacheFirst",
              //   options: {
              //     cacheName: "open-free-map-tiles",
              //     expiration: {
              //       // maxEntries: 500,
              //       maxAgeSeconds: 60 * 60 * 24 * 90, // 90 Days
              //     },
              //   },
              // },
              {
                urlPattern: /https:\/\/tiles\.openfreemap\.org\/.*/,
                handler: "CacheFirst",
                options: {
                  cacheName: "open-free-map",
                  expiration: {
                    // maxEntries: 500,
                    maxAgeSeconds: 60 * 60 * 24 * 90, // 90 Days
                  },
                },
              },
              {
                urlPattern: /.*mapbox.*/,
                handler: "StaleWhileRevalidate",
                options: {
                  cacheName: "mapbox",
                  expiration: {
                    // maxEntries: 500,
                    maxAgeSeconds: 60 * 60 * 24 * 90, // 90 Days
                  },
                },
              },
              {
                urlPattern: /.*.js/,
                handler: "StaleWhileRevalidate",
                options: {
                  cacheName: "javascript",
                  expiration: {
                    // maxEntries: 500,
                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
                  },
                },
              },
              {
                urlPattern: /.*.css/,
                handler: "StaleWhileRevalidate",
                options: {
                  cacheName: "css",
                  expiration: {
                    // maxEntries: 500,
                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
                  },
                },
              },
              {
                urlPattern: /.*.html/,
                handler: "StaleWhileRevalidate",
                options: {
                  cacheName: "html",
                  expiration: {
                    // maxEntries: 500,
                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
                  },
                },
              },
              {
                urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)$/,
                handler: "StaleWhileRevalidate",
                options: {
                  cacheName: "images",
                  expiration: {
                    // maxEntries: 500,
                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
                  },
                },
              },
            ],
          },
        }),
        createHtmlPlugin({
          inject: {
            data: {
              app: ENV.VITE_APP_NAME,
              title: title[ENV.VITE_APP_NAME],
              inject_metas: `<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f7f7f7" /> <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0d0d0d" /> <meta name="apple-mobile-web-app-title" media="-" content=${ENV.VITE_APP_NAME} />`,
            },
          },
        }),
      ],
      resolve: {
        alias: {
          "#details": path.resolve(
            dirname,
            "../../packages/content/dist/components/details"
          ),
          "#feature": path.resolve(
            dirname,
            "../../packages/content/dist/components/feature"
          ),
          "#lists": path.resolve(
            dirname,
            "../../packages/content/dist/components/lists"
          ),
          "#routes": path.resolve(
            dirname,
            "../../packages/content/dist/routes"
          ),
          "#supabase": path.resolve(
            dirname,
            "../../packages/data/data/dist/supabase"
          ),
        },
      },
    };
  });
};
