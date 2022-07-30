import { _ as _export_sfc, d as defineComponent, a as computed, e as createBlock, w as withCtx, n as normalizeClass, u as unref, S as Screen, o as openBlock, f as createVNode, h as createBaseVNode, ai as QBtn, P as Plugin, ad as createTextVNode, ae as toDisplayString, af as QIcon, ac as createElementBlock, ak as renderList, aj as Fragment, j as normalizeStyle } from "./index.f0dfeb9e.js";
import { Q as QScrollArea } from "./QScrollArea.d091166c.js";
import { Q as QPage } from "./QPage.8c463601.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
import "./QResizeObserver.37f17ae1.js";
import "./selection.f44b76f5.js";
import "./format.801e7424.js";
const _hoisted_1 = { class: "q-px-md q-pt-lg q-pb-lg" };
const _hoisted_2 = { class: "flex justify-center q-mt-xl" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccountCreated",
  setup(__props) {
    const isMobile = computed(() => Screen.lt.md);
    const isXS = computed(() => Screen.lt.sm);
    const documents = [
      "ci",
      "passport",
      "carnet",
      "cpp",
      "ptp",
      "license"
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: normalizeClass(["hp-100", {
          "bg-nv-dark": unref(Plugin).isActive,
          "bg-nv-light": !unref(Plugin).isActive,
          "flex column flex-center": !unref(isMobile)
        }])
      }, {
        default: withCtx(() => [
          createVNode(QScrollArea, {
            "thumb-style": {
              right: "0px",
              borderRadius: "9px",
              backgroundColor: `${unref(Plugin).isActive ? "#016608" : "#52B301"}`,
              width: "3px",
              opacity: "0.7"
            },
            barStyle: {
              right: "0px",
              borderRadius: "5px",
              backgroundColor: "#C4C4C4",
              width: "3px",
              opacity: "0.4"
            },
            class: "no-margin hp-100"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass({
                  "wp-40": !unref(isMobile)
                })
              }, [
                createBaseVNode("div", {
                  class: normalizeClass({
                    "flex justify-end q-pt-lg q-px-md": unref(isMobile),
                    "wp-100 flex justify-end": !unref(isMobile)
                  })
                }, [
                  createVNode(QBtn, {
                    flat: "",
                    rounded: "",
                    size: "md",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/login")),
                    icon: "cancel",
                    class: "q-px-none"
                  })
                ], 2),
                createBaseVNode("div", _hoisted_1, [
                  createBaseVNode("h5", {
                    class: normalizeClass([{
                      "fs-23": unref(isXS),
                      "text-white": unref(Plugin).isActive,
                      "text-nv-light-accent": !unref(Plugin).isActive
                    }, "no-padding q-mb-xs q-mt-sm text-left"])
                  }, [
                    createTextVNode(toDisplayString(_ctx.$t("accountCreated.accountCreated")) + " ", 1),
                    createVNode(QIcon, {
                      class: "q-ml-xs",
                      size: "1.7em",
                      name: "check_circle_outline"
                    })
                  ], 2),
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("h4", {
                      class: normalizeClass([{
                        "fs-17": unref(isMobile),
                        "fs-18": !unref(isMobile),
                        "text-white": unref(Plugin).isActive,
                        "text-nv-light-accent": !unref(Plugin).isActive
                      }, "wp-100 text-center q-my-xs"])
                    }, toDisplayString(_ctx.$t("accountCreated.validateYourEntity")), 3),
                    createVNode(QIcon, {
                      size: "11em",
                      name: "img:icons/user.svg"
                    }),
                    createBaseVNode("p", {
                      class: normalizeClass([{
                        "text-white": unref(Plugin).isActive,
                        "text-nv-light-accent": !unref(Plugin).isActive
                      }, "q-mt-md q-mx-md"])
                    }, toDisplayString(_ctx.$t("accountCreated.caption")), 3),
                    createBaseVNode("div", {
                      class: normalizeClass([{
                        "text-white": unref(Plugin).isActive,
                        "text-nv-light-accent": !unref(Plugin).isActive
                      }, "q-mt-md q-mb-xs text-left wp-100"])
                    }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(documents, (document) => {
                        return createBaseVNode("p", {
                          key: document,
                          class: "q-mt-none q-mb-sm q-mx-md"
                        }, [
                          createBaseVNode("span", {
                            style: normalizeStyle(`
                          height: 5px;
                          width: 5px;
                          background-color: ${unref(Plugin).isActive ? "#fff" : "#29313C"};
                          border-radius: 50%;
                          display: inline-block;
                        `),
                            class: "q-mr-sm mb-2"
                          }, null, 4),
                          createTextVNode(" " + toDisplayString(_ctx.$t(`accountCreated.${document}`)), 1)
                        ]);
                      }), 64)),
                      createBaseVNode("p", {
                        class: normalizeClass([{
                          "text-white": unref(Plugin).isActive,
                          "text-nv-light-accent": !unref(Plugin).isActive
                        }, "q-mt-lg q-mx-md"])
                      }, toDisplayString(_ctx.$t("accountCreated.pressTheButton")), 3)
                    ], 2)
                  ]),
                  createVNode(QBtn, {
                    color: `nv-${unref(GetSuffix)("primary")}`,
                    class: "full-width br-20 py-12 q-mt-sm fs-16",
                    unelevated: "",
                    "no-caps": "",
                    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push("/password-reset"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("buttons.continue")), 1)
                    ]),
                    _: 1
                  }, 8, ["color"])
                ])
              ], 2)
            ]),
            _: 1
          }, 8, ["thumb-style", "barStyle"])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
var AccountCreated = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AccountCreated.vue"]]);
export { AccountCreated as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudENyZWF0ZWQuNWVlNTEzZTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BdXRoL3BhZ2VzL0FjY291bnRDcmVhdGVkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZVxuICAgICAgICBjbGFzcz1cImhwLTEwMFwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1udi1kYXJrJzogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICdiZy1udi1saWdodCc6ICFEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgJ2ZsZXggY29sdW1uIGZsZXgtY2VudGVyJzogIWlzTW9iaWxlXG4gICAgICAgIH1cIlxuICAgID5cbiAgICA8cS1zY3JvbGwtYXJlYVxuICAgICAgICAgICAgICAgICAgICA6dGh1bWItc3R5bGU9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc5cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXJrLmlzQWN0aXZlID8gJyMwMTY2MDgnIDogJyM1MkIzMDEnXG4gICAgICAgICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcwLjcnXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICA6YmFyU3R5bGU9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0M0QzRDNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzNweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMC40J1xuICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW4gaHAtMTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnd3AtNDAnIDogIWlzTW9iaWxlXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgJ2ZsZXgganVzdGlmeS1lbmQgcS1wdC1sZyBxLXB4LW1kJzogaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICd3cC0xMDAgZmxleCBqdXN0aWZ5LWVuZCc6ICFpc01vYmlsZVxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvbG9naW4nKVwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInEtcHgtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1weC1tZCBxLXB0LWxnIHEtcGItbGdcIj5cbiAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTIzJzogaXNYUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXdoaXRlJyA6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1saWdodC1hY2NlbnQnIDogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZyBxLW1iLXhzIHEtbXQtc20gdGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdhY2NvdW50Q3JlYXRlZC5hY2NvdW50Q3JlYXRlZCcpIH19XG5cbiAgICAgICAgICAgICAgICAgICAgPHEtaWNvbiBjbGFzcz1cInEtbWwteHNcIiBzaXplPVwiMS43ZW1cIiBuYW1lPVwiY2hlY2tfY2lyY2xlX291dGxpbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHEtbXQteGxcIj5cbiAgICAgICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTE3JyA6IGlzTW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTE4JyA6ICFpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXdoaXRlJyA6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1saWdodC1hY2NlbnQnIDogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwid3AtMTAwIHRleHQtY2VudGVyIHEtbXkteHNcIlxuICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdhY2NvdW50Q3JlYXRlZC52YWxpZGF0ZVlvdXJFbnRpdHknKSB9fVxuICAgICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgICAgIDxxLWljb24gc2l6ZT1cIjExZW1cIiBuYW1lPVwiaW1nOmljb25zL3VzZXIuc3ZnXCIgLz5cblxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXdoaXRlJyA6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1saWdodC1hY2NlbnQnIDogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tdC1tZCBxLW14LW1kXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdhY2NvdW50Q3JlYXRlZC5jYXB0aW9uJykgfX1cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXdoaXRlJyA6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1saWdodC1hY2NlbnQnIDogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tdC1tZCBxLW1iLXhzIHRleHQtbGVmdCB3cC0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiZG9jdW1lbnQgaW4gZG9jdW1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJkb2N1bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInEtbXQtbm9uZSBxLW1iLXNtIHEtbXgtbWRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhcmsuaXNBY3RpdmUgPyAnI2ZmZicgOiAnIzI5MzEzQydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tci1zbSBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoYGFjY291bnRDcmVhdGVkLiR7ZG9jdW1lbnR9YCkgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZScgOiBEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtbnYtbGlnaHQtYWNjZW50JyA6ICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInEtbXQtbGcgcS1teC1tZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdCgnYWNjb3VudENyZWF0ZWQucHJlc3NUaGVCdXR0b24nKSB9fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImBudi0ke0dldFN1ZmZpeCgncHJpbWFyeScpfWBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggYnItMjAgcHktMTIgcS1tdC1zbSBmcy0xNlwiXG4gICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy9wYXNzd29yZC1yZXNldCcpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdidXR0b25zLmNvbnRpbnVlJykgfX1cbiAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgRGFyaywgU2NyZWVuIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkLCByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBHZXRTdWZmaXggZnJvbSAnLi4vLi4vYXBwL3NoYXJlZC9oZWxwZXJzL0dldFN1ZmZpeCc7XG5cbmNvbnN0IGlzTW9iaWxlID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0Lm1kKTtcbmNvbnN0IGlzWFMgPSBjb21wdXRlZCgoKSA9PiBTY3JlZW4ubHQuc20pO1xuXG5jb25zdCBkb2N1bWVudHMgPSBbXG4gICAgJ2NpJywgJ3Bhc3Nwb3J0JywgJ2Nhcm5ldCcsICdjcHAnLCAncHRwJywgJ2xpY2Vuc2UnXG5dO1xuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFrSkEsVUFBTSxXQUFXLFNBQVMsTUFBTSxPQUFPLEdBQUcsRUFBRTtBQUM1QyxVQUFNLE9BQU8sU0FBUyxNQUFNLE9BQU8sR0FBRyxFQUFFO0FBRXhDLFVBQU0sWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUFNO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
