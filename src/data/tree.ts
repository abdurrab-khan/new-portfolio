import type { DataTreeType } from "@/types/data-tree";

const DataTree: DataTreeType = {
  c: {
    data: {
      name: "C Drive",
      type: "folder",
      iconPath: "/icons/c-drive.png",
      address: "C:\\",
    },
    children: {
      "my-documents": {
        data: {
          name: "My Documents",
          type: "folder",
          iconPath: "/icons/my-documents.png",
          address: "C:\\My Documents",
        },
      },
      "program-files": {
        data: {
          name: "Program Files",
          type: "folder",
          iconPath: "/icons/folder.png",
          address: "C:\\Program Files",
        },
      },
      windows: {
        data: {
          name: "Windows",
          type: "folder",
          iconPath: "/icons/folder.png",
          address: "C:\\Windows",
        },
        children: {
          desktop: {
            data: {
              name: "Desktop",
              type: "folder",
              iconPath: "/icons/folder.png",
              address: "C:\\Windows\\Desktop",
            },
            children: {
              "my-computer": {
                data: {
                  name: "My Computer",
                  type: "folder",
                  targetPath: "C:\\",
                  iconPath: "/icons/my-computer.png",
                  address: "C:\\Windows\\Desktop\\My Computer",
                },
              },
              recyclebin: {
                data: {
                  name: "Recycle Bin",
                  type: "folder",
                  address: "C:\\Windows\\Desktop\\Recycle Bin",
                  iconPath: "/icons/recycle-bin.png",
                },
              },
              portfolio: {
                data: {
                  name: "About Me",
                  type: "react-node",
                  address: "C:\\Windows\\Desktop\\About Me",
                  iconPath: "/icons/explorer.png",
                  component: null, // Placeholder for React component
                },
              },
              skills: {
                data: {
                  name: "Skills",
                  type: "folder",
                  iconPath: "/icons/folder.png",
                  address: "C:\\Windows\\Desktop\\Skills",
                },
                children: {
                  html: {
                    data: {
                      name: "HTML",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\HTML",
                      imagePath: "/images/skills/html.png",
                      iconPath: "/icons/html.png",
                    },
                  },
                  css: {
                    data: {
                      name: "CSS",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\CSS",
                      imagePath: "/images/skills/css.png",
                      iconPath: "/icons/css.png",
                    },
                  },
                  tailwindcss: {
                    data: {
                      name: "Tailwind CSS",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Tailwind CSS",
                      imagePath: "/images/skills/tailwindcss.png",
                      iconPath: "/icons/tailwindcss.png",
                    },
                  },
                  javascript: {
                    data: {
                      name: "JavaScript",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\JavaScript",
                      imagePath: "/images/skills/javascript.png",
                      iconPath: "/icons/javascript.png",
                    },
                  },
                  typescript: {
                    data: {
                      name: "TypeScript",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\TypeScript",
                      imagePath: "/images/skills/typescript.png",
                      iconPath: "/icons/typescript.png",
                    },
                  },
                  python: {
                    data: {
                      name: "Python",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Python",
                      imagePath: "/images/skills/python.png",
                      iconPath: "/icons/python.png",
                    },
                  },
                  cpp: {
                    data: {
                      name: "C++",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\C++",
                      imagePath: "/images/skills/cpp.png",
                      iconPath: "/icons/cpp.png",
                    },
                  },
                  react: {
                    data: {
                      name: "React",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\React",
                      imagePath: "/images/skills/react.png",
                      iconPath: "/icons/react.png",
                    },
                  },
                  reactnative: {
                    data: {
                      name: "React Native",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\React Native",
                      imagePath: "/images/skills/reactnative.png",
                      iconPath: "/icons/reactnative.png",
                    },
                  },
                  nextjs: {
                    data: {
                      name: "Next.js",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Next.js",
                      imagePath: "/images/skills/nextjs.png",
                      iconPath: "/icons/nextjs.png",
                    },
                  },
                  socketio: {
                    data: {
                      name: "Socket.io",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Socket.io",
                      imagePath: "/images/skills/socketio.png",
                      iconPath: "/icons/socketio.png",
                    },
                  },
                  nodejs: {
                    data: {
                      name: "Node.js",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Node.js",
                      imagePath: "/images/skills/nodejs.png",
                      iconPath: "/icons/nodejs.png",
                    },
                  },
                  expressjs: {
                    data: {
                      name: "Express.js",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Express.js",
                      imagePath: "/images/skills/expressjs.png",
                      iconPath: "/icons/expressjs.png",
                    },
                  },
                  postgres: {
                    data: {
                      name: "PostgreSQL",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\PostgreSQL",
                      imagePath: "/images/skills/postgres.png",
                      iconPath: "/icons/postgres.png",
                    },
                  },
                  mongodb: {
                    data: {
                      name: "MongoDB",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\MongoDB",
                      imagePath: "/images/skills/mongodb.png",
                      iconPath: "/icons/mongodb.png",
                    },
                  },
                  redis: {
                    data: {
                      name: "Redis",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Redis",
                      imagePath: "/images/skills/redis.png",
                      iconPath: "/icons/redis.png",
                    },
                  },
                  docker: {
                    data: {
                      name: "Docker",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Docker",
                      imagePath: "/images/skills/docker.png",
                      iconPath: "/icons/docker.png",
                    },
                  },
                  git: {
                    data: {
                      name: "Git",
                      type: "image",
                      address: "C:\\Windows\\Desktop\\Skills\\Git",
                      imagePath: "/images/skills/git.png",
                      iconPath: "/icons/git.png",
                    },
                  },
                },
              },
              "new-folder": {
                data: {
                  name: "New Folder",
                  type: "folder",
                  iconPath: "/icons/folder.png",
                  address: "C:\\Windows\\Desktop\\New Folder",
                },
                children: {},
              },
            },
          },
          system32: {
            data: {
              name: "System32",
              type: "folder",
              iconPath: "/icons/folder.png",
              address: "C:\\Windows\\System32",
            },
          },
          temp: {
            data: {
              name: "Temp",
              type: "folder",
              iconPath: "/icons/folder.png",
              address: "C:\\Windows\\Temp",
            },
          },
          fonts: {
            data: {
              name: "Fonts",
              type: "folder",
              iconPath: "/icons/folder.png",
              address: "C:\\Windows\\Fonts",
            },
          },
          help: {
            data: {
              name: "Help",
              type: "folder",
              iconPath: "/icons/folder.png",
              address: "C:\\Windows\\Help",
            },
          },
        },
      },
      users: {
        data: {
          name: "Users",
          type: "folder",
          iconPath: "/icons/folder.png",
          address: "C:\\Users",
        },
      },
      temp: {
        data: {
          name: "Temp",
          type: "folder",
          iconPath: "/icons/folder.png",
          address: "C:\\Temp",
        },
      },
      recycler: {
        data: {
          name: "RECYCLER",
          type: "folder",
          iconPath: "/icons/folder.png",
          address: "C:\\RECYCLER",
        },
      },
      bootlog: {
        data: {
          name: "BOOTLOG.TXT",
          type: "text",
          iconPath: "/icons/text.png",
          address: "C:\\BOOTLOG.TXT",
        },
      },
      autoexec: {
        data: {
          name: "AUTOEXEC.BAT",
          type: "text",
          iconPath: "/icons/text.png",
          address: "C:\\AUTOEXEC.BAT",
        },
      },
      config: {
        data: {
          name: "CONFIG.SYS",
          type: "text",
          iconPath: "/icons/text.png",
          address: "C:\\CONFIG.SYS",
        },
      },
      io: {
        data: {
          name: "IO.SYS",
          type: "text",
          iconPath: "/icons/text.png",
          address: "C:\\IO.SYS",
        },
      },
      msdos: {
        data: {
          name: "MSDOS.SYS",
          type: "text",
          iconPath: "/icons/text.png",
          address: "C:\\MSDOS.SYS",
        },
      },
    },
  },
};

export default DataTree;
