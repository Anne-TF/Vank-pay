import { Q as QScrollObserver } from "./QResizeObserver.37f17ae1.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.d45799f0.js";
import { _ as _export_sfc, d as defineComponent, y as ref, a as computed, e as createBlock, w as withCtx, a7 as useQuasar, a8 as useRouter, r as resolveComponent, o as openBlock, f as createVNode, g as withDirectives, v as vShow, u as unref, h as createBaseVNode, ac as createElementBlock, ak as renderList, aj as Fragment, j as normalizeStyle, T as Transition, af as QIcon, n as normalizeClass } from "./index.f0dfeb9e.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
const _hoisted_1 = ["data-icon"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainLayout",
  setup(__props) {
    useQuasar();
    const { dark } = useQuasar();
    const { screen } = useQuasar();
    const $router = useRouter();
    const linksList = [
      {
        title: "Billeteras",
        icon: "fa-solid fa-wallet",
        link: "/",
        library: "fa"
      },
      {
        title: "Notificaciones",
        icon: "ri-notification-4-fill",
        link: "/notifications",
        library: "ri"
      },
      {
        title: "Pagos",
        icon: "gg:arrows-exchange",
        link: "#",
        library: "ic"
      },
      {
        title: "Mi perfil",
        icon: "fa-solid fa-user",
        link: "/auth/my-profile",
        library: "fa"
      },
      {
        title: "Configuraciones",
        icon: "fa-solid fa-sliders",
        link: "/settings",
        library: "fa"
      }
    ];
    ref(false);
    const showMobileMenu = ref(true);
    const handleScroll = (info) => {
      if ((info == null ? void 0 : info.direction) === "down") {
        showMobileMenu.value = false;
      } else {
        setTimeout(() => {
          showMobileMenu.value = true;
        }, 50);
      }
    };
    const getRoute = computed(() => $router.currentRoute.value.path);
    const isMobile = computed(() => screen.lt.md);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QScrollObserver, { onScroll: handleScroll }),
              createVNode(_component_router_view)
            ]),
            _: 1
          }),
          createVNode(Transition, {
            mode: "in-out",
            "enter-active-class": "animated fadeInUp",
            duration: { enter: 200, leave: 200 },
            "leave-active-class": "animated fadeOutDown"
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("div", {
                style: normalizeStyle(`background-color: ${unref(dark).isActive ? "#1D2229" : "#F5F5F5"}; height: 60px;`),
                class: "fixed-bottom mb-30 mx-35 br-18 q-py-sm q-px-lg flex flex-inline items-center justify-between"
              }, [
                (openBlock(), createElementBlock(Fragment, null, renderList(linksList, (link, index) => {
                  return createBaseVNode("div", {
                    key: index,
                    class: "wp-13 hp-80 flex items-center justify-center br-8",
                    style: normalizeStyle(`
                        ${unref(getRoute) === link.link && link.link !== "#" && unref(dark).isActive ? "background-color: #29313C" : unref(getRoute) === link.link ? "background-color: #868E9B" : ""}
                            ${link.link === "#" ? "background-color: #3B424B; width: 52px; height: 52px; border-radius: 13px; transform: rotate(-45deg);" : ""}
                    `)
                  }, [
                    withDirectives(createVNode(QIcon, {
                      size: "22px",
                      name: link.icon,
                      class: normalizeClass({
                        "text-white": unref(getRoute) === link.link
                      })
                    }, null, 8, ["name", "class"]), [
                      [vShow, link.library === "fa"]
                    ]),
                    withDirectives(createBaseVNode("span", {
                      class: normalizeClass(["iconify fs-32", `text-nv-${unref(GetSuffix)("accent")}`]),
                      style: { "transform": "rotate(46deg)" },
                      "data-icon": link.icon
                    }, null, 10, _hoisted_1), [
                      [vShow, link.library === "ic"]
                    ]),
                    withDirectives(createBaseVNode("i", {
                      class: normalizeClass(`fs-24 ${link.icon} ${unref(getRoute) === link.link ? "text-white" : ""}`)
                    }, null, 2), [
                      [vShow, link.library === "ri"]
                    ])
                  ], 4);
                }), 64))
              ], 4), [
                [vShow, unref(isMobile) && showMobileMenu.value]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "MainLayout.vue"]]);
export { MainLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC40ZTFjMzY4Ny5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9sYXlvdXRzL01haW5MYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cS1sYXlvdXQgdmlldz1cImxIaCBMcHIgbEZmXCI+XG4gICAgICAgIDwhLS0gPHEtaGVhZGVyIGVsZXZhdGVkPlxuICAgICAgICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgICBpY29uPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZW51XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlTGVmdERyYXdlclwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxxLXRvb2xiYXItdGl0bGU+IFF1YXNhciBBcHAgPC9xLXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlF1YXNhciB2e3sgdmVyc2lvbiB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxxLXRvZ2dsZSA6bW9kZWwtdmFsdWU9XCJkYXJrLmlzQWN0aXZlXCIgQHVwZGF0ZTptb2RlbC12YWx1ZT1cInN3aXRjaE1vZGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLXRvb2xiYXI+XG4gICAgICAgIDwvcS1oZWFkZXI+XG5cbiAgICAgICAgPHEtZHJhd2VyIHYtbW9kZWw9XCJsZWZ0RHJhd2VyT3BlblwiIHNob3ctaWYtYWJvdmUgYm9yZGVyZWQ+XG4gICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPiBFc3NlbnRpYWwgTGlua3MgPC9xLWl0ZW0tbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8RXNzZW50aWFsTGlua1xuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImxpbmsgaW4gbGlua3NMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImxpbmsudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgIDwvcS1kcmF3ZXI+IC0tPlxuXG4gICAgICAgIDxxLXBhZ2UtY29udGFpbmVyPlxuICAgICAgICAgICAgIDxxLXNjcm9sbC1vYnNlcnZlciBAc2Nyb2xsPVwiaGFuZGxlU2Nyb2xsXCIgLz5cbiAgICAgICAgICAgIDxyb3V0ZXItdmlldyAvPlxuICAgICAgICA8L3EtcGFnZS1jb250YWluZXI+XG5cbiAgICAgICAgPHRyYW5zaXRpb25cbiAgICAgICAgICAgIG1vZGU9XCJpbi1vdXRcIlxuICAgICAgICAgICAgZW50ZXItYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluVXBcIlxuICAgICAgICAgICAgOmR1cmF0aW9uPSd7IGVudGVyOiAyMDAsIGxlYXZlOiAyMDAgfSdcbiAgICAgICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVPdXREb3duXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgdi1zaG93PVwiaXNNb2JpbGUgJiYgc2hvd01vYmlsZU1lbnVcIlxuICAgICAgICAgICAgICAgIDpzdHlsZT1cImBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmsuaXNBY3RpdmUgPyAnIzFEMjIyOScgOiAnI0Y1RjVGNSd9OyBoZWlnaHQ6IDYwcHg7YFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmaXhlZC1ib3R0b20gbWItMzAgbXgtMzUgYnItMTggcS1weS1zbSBxLXB4LWxnIGZsZXggZmxleC1pbmxpbmUgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihsaW5rLCBpbmRleCkgaW4gbGlua3NMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3cC0xMyBocC04MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBici04XCJcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRSb3V0ZSA9PT0gbGluay5saW5rICYmIGxpbmsubGluayAhPT0gJyMnICYmIGRhcmsuaXNBY3RpdmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMTNDJyA6IChnZXRSb3V0ZSA9PT0gbGluay5saW5rID8gJ2JhY2tncm91bmQtY29sb3I6ICM4NjhFOUInIDogJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsubGluayA9PT0gJyMnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICMzQjQyNEI7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IGJvcmRlci1yYWRpdXM6IDEzcHg7IHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7JyA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIyMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImxpbmsubGlicmFyeSA9PT0gJ2ZhJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImxpbmsuaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnIDogZ2V0Um91dGUgPT09IGxpbmsubGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwibGluay5saWJyYXJ5ID09PSAnaWMnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbmlmeSBmcy0zMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKDQ2ZGVnKTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtaWNvbj1cImxpbmsuaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGkgdi1zaG93PVwibGluay5saWJyYXJ5ID09PSAncmknXCIgOmNsYXNzPVwiYGZzLTI0ICR7bGluay5pY29ufSAke2dldFJvdXRlID09PSBsaW5rLmxpbmsgPyAndGV4dC13aGl0ZScgOiAnJ31gXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBFc3NlbnRpYWxMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvRXNzZW50aWFsTGluay52dWUnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IEdldFN1ZmZpeCBmcm9tICcuLi9zaGFyZWQvaGVscGVycy9HZXRTdWZmaXgnO1xuXG5jb25zdCB7IHZlcnNpb24gfSA9IHVzZVF1YXNhcigpO1xuY29uc3QgeyBkYXJrIH0gPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHsgc2NyZWVuIH0gPSB1c2VRdWFzYXIoKTtcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgbGlua3NMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdCaWxsZXRlcmFzJyxcbiAgICAgICAgaWNvbjogJ2ZhLXNvbGlkIGZhLXdhbGxldCcsXG4gICAgICAgIGxpbms6ICcvJyxcbiAgICAgICAgbGlicmFyeTogJ2ZhJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2lvbmVzJyxcbiAgICAgICAgaWNvbjogJ3JpLW5vdGlmaWNhdGlvbi00LWZpbGwnLFxuICAgICAgICBsaW5rOiAnL25vdGlmaWNhdGlvbnMnLFxuICAgICAgICBsaWJyYXJ5OiAncmknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUGFnb3MnLFxuICAgICAgICBpY29uOiAnZ2c6YXJyb3dzLWV4Y2hhbmdlJyxcbiAgICAgICAgbGluazogJyMnLFxuICAgICAgICBsaWJyYXJ5OiAnaWMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnTWkgcGVyZmlsJyxcbiAgICAgICAgaWNvbjogJ2ZhLXNvbGlkIGZhLXVzZXInLFxuICAgICAgICBsaW5rOiAnL2F1dGgvbXktcHJvZmlsZScsXG4gICAgICAgIGxpYnJhcnk6ICdmYSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb25maWd1cmFjaW9uZXMnLFxuICAgICAgICBpY29uOiAnZmEtc29saWQgZmEtc2xpZGVycycsXG4gICAgICAgIGxpbms6ICcvc2V0dGluZ3MnLFxuICAgICAgICBsaWJyYXJ5OiAnZmEnXG4gICAgfVxuXTtcblxuY29uc3QgbGVmdERyYXdlck9wZW4gPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuY29uc3Qgc2hvd01vYmlsZU1lbnUgPSByZWY8Ym9vbGVhbj4odHJ1ZSk7XG5cbmNvbnN0IHRvZ2dsZUxlZnREcmF3ZXIgPSAoKSA9Plxue1xuICAgIGxlZnREcmF3ZXJPcGVuLnZhbHVlID0gIWxlZnREcmF3ZXJPcGVuLnZhbHVlO1xufTtcblxuY29uc3Qgc3dpdGNoTW9kZSA9ICgpID0+XG57XG4gICAgZGFyay5zZXQoIWRhcmsuaXNBY3RpdmUpO1xufTtcblxuY29uc3QgaGFuZGxlU2Nyb2xsID0gKGluZm86IGFueSkgPT5cbntcbiAgICBpZiAoaW5mbz8uZGlyZWN0aW9uID09PSAnZG93bicpXG4gICAge1xuICAgICAgICBzaG93TW9iaWxlTWVudS52YWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHNob3dNb2JpbGVNZW51LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfSwgNTApO1xuICAgIH1cbn07XG5cbmNvbnN0IGdldFJvdXRlID0gY29tcHV0ZWQoKCkgPT4gJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGF0aCk7XG5jb25zdCBpc01vYmlsZSA9IGNvbXB1dGVkKCgpID0+IHNjcmVlbi5sdC5tZCk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQTZGb0IsY0FBVTtBQUN4QixVQUFBLEVBQUUsU0FBUztBQUNYLFVBQUEsRUFBRSxXQUFXO0FBQ25CLFVBQU0sVUFBVTtBQUVoQixVQUFNLFlBQVk7QUFBQSxNQUNkO0FBQUEsUUFDSSxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNJLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0ksT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDSSxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNJLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNiO0FBQUEsSUFBQTtBQUdtQixRQUFhLEtBQUs7QUFDbkMsVUFBQSxpQkFBaUIsSUFBYSxJQUFJO0FBWWxDLFVBQUEsZUFBZSxDQUFDLFNBQ3RCO0FBQ1EsV0FBQSw2QkFBTSxlQUFjLFFBQ3hCO0FBQ0ksdUJBQWUsUUFBUTtBQUFBLE1BQUEsT0FHM0I7QUFDSSxtQkFBVyxNQUNYO0FBQ0kseUJBQWUsUUFBUTtBQUFBLFdBQ3hCLEVBQUU7QUFBQSxNQUNUO0FBQUEsSUFBQTtBQUdKLFVBQU0sV0FBVyxTQUFTLE1BQU0sUUFBUSxhQUFhLE1BQU0sSUFBSTtBQUMvRCxVQUFNLFdBQVcsU0FBUyxNQUFNLE9BQU8sR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
