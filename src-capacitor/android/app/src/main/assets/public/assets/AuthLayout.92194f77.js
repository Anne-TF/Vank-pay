import { Q as QLayout, a as QPageContainer } from "./QLayout.d45799f0.js";
import { _ as _export_sfc, d as defineComponent, a as computed, e as createBlock, w as withCtx, S as Screen, r as resolveComponent, o as openBlock, f as createVNode, g as withDirectives, v as vShow, h as createBaseVNode, n as normalizeClass, u as unref, P as Plugin, T as Transition, i as resolveDynamicComponent, j as normalizeStyle } from "./index.f0dfeb9e.js";
import "./QResizeObserver.37f17ae1.js";
var AuthLayout_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".light--bg[data-v-27739fad] {\n  background-color: #F8EFA3 !important;\n}\n.dark--bg[data-v-27739fad] {\n  background-color: #161B22 !important;\n}\n.light--balls[data-v-27739fad] {\n  background-color: #D9D9D9;\n}\n.dark--balls[data-v-27739fad] {\n  background-color: #016608;\n}\n.balls[data-v-27739fad] {\n  height: 220px;\n  width: 220px;\n  border-radius: 50%;\n  position: absolute;\n}\n.balls[data-v-27739fad]:nth-child(1) {\n  animation: pulse1-27739fad 10s linear infinite;\n}\n.balls[data-v-27739fad]:nth-child(2) {\n  animation: pulse2-27739fad 10s linear infinite;\n}\n@keyframes pulse1-27739fad {\n0% {\n    transform: scale(1.17);\n}\n50% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(1.17);\n}\n}\n@keyframes pulse2-27739fad {\n0% {\n    transform: scale(1);\n}\n50% {\n    transform: scale(1.17);\n}\n100% {\n    transform: scale(1);\n}\n}\n.fade-enter-from[data-v-27739fad], .fade-leave-to[data-v-27739fad], .fade-leave-active[data-v-27739fad] {\n  opacity: 0;\n}\n.fade-enter-active[data-v-27739fad] {\n  transition: opacity 0.9s ease-out;\n}")();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthLayout",
  setup(__props) {
    const isMobile = computed(() => Screen.lt.md);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, {
        class: "no-scroll",
        style: { "overflow-x": "hidden !important" },
        view: "lHh Lpr lFf"
      }, {
        default: withCtx(() => [
          createVNode(QPageContainer, {
            class: normalizeClass({ "light--bg": !unref(Plugin).isActive, "dark--bg": unref(Plugin).isActive }),
            style: normalizeStyle(`height: ${unref(isMobile) ? "100vmax" : "100vh"} !important;`)
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("span", {
                style: `
                top: -40px;
                right: -80px;
                `,
                class: normalizeClass(["balls", { "light--balls": !unref(Plugin).isActive, "dark--balls": unref(Plugin).isActive }])
              }, null, 2), [
                [
                  vShow,
                  _ctx.$router.currentRoute.value.path === "/login" || _ctx.$router.currentRoute.value.path === "/sign-up"
                ]
              ]),
              withDirectives(createBaseVNode("span", {
                style: `
                top: 201px;
                left: -120px;
                `,
                class: normalizeClass(["balls", { "light--balls": !unref(Plugin).isActive, "dark--balls": unref(Plugin).isActive }])
              }, null, 2), [
                [
                  vShow,
                  _ctx.$router.currentRoute.value.path === "/login" || _ctx.$router.currentRoute.value.path === "/sign-up"
                ]
              ]),
              createVNode(_component_router_view, null, {
                default: withCtx(({ Component, route }) => [
                  createVNode(Transition, {
                    "appear-active-class": route.meta.enterAnimation,
                    "leave-active-class": route.meta.leaveAnimation,
                    duration: {
                      enter: 100,
                      leave: 200
                    },
                    appear: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(Component), { style: { "height": "100% !important" } }))
                    ]),
                    _: 2
                  }, 1032, ["appear-active-class", "leave-active-class"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["class", "style"])
        ]),
        _: 1
      });
    };
  }
});
var AuthLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27739fad"], ["__file", "AuthLayout.vue"]]);
export { AuthLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aExheW91dC45MjE5NGY3Ny5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0F1dGgvbGF5b3V0cy9BdXRoTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtbGF5b3V0IGNsYXNzPVwibm8tc2Nyb2xsXCIgc3R5bGU9XCJvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcIiB2aWV3PVwibEhoIExwciBsRmZcIj5cbiAgICAgICAgPHEtcGFnZS1jb250YWluZXJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2xpZ2h0LS1iZycgOiAhRGFyay5pc0FjdGl2ZSwgJ2RhcmstLWJnJyA6IERhcmsuaXNBY3RpdmUgfVwiXG4gICAgICAgICAgICA6c3R5bGU9XCJgaGVpZ2h0OiAke2lzTW9iaWxlID8gJzEwMHZtYXgnIDogJzEwMHZoJ30gIWltcG9ydGFudDtgXCI+XG5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgOnN0eWxlPVwiYFxuICAgICAgICAgICAgICAgIHRvcDogLTQwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC04MHB4O1xuICAgICAgICAgICAgICAgIGBcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmFsbHNcIlxuICAgICAgICAgICAgICAgIHYtc2hvdz1cIlxuICAgICAgICAgICAgICAgICAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXRoID09PSAnL2xvZ2luJyB8fFxuICAgICAgICAgICAgICAgICAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXRoID09PSAnL3NpZ24tdXAnXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdsaWdodC0tYmFsbHMnIDogIURhcmsuaXNBY3RpdmUsICdkYXJrLS1iYWxscycgOiBEYXJrLmlzQWN0aXZlIH1cIlxuICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICA6c3R5bGU9XCJgXG4gICAgICAgICAgICAgICAgdG9wOiAyMDFweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTIwcHg7XG4gICAgICAgICAgICAgICAgYFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiYWxsc1wiXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiXG4gICAgICAgICAgICAgICAgICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhdGggPT09ICcvbG9naW4nIHx8XG4gICAgICAgICAgICAgICAgICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhdGggPT09ICcvc2lnbi11cCdcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2xpZ2h0LS1iYWxscycgOiAhRGFyay5pc0FjdGl2ZSwgJ2RhcmstLWJhbGxzJyA6IERhcmsuaXNBY3RpdmUgfVwiXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgPHJvdXRlci12aWV3IHYtc2xvdD1cInsgQ29tcG9uZW50LCByb3V0ZSB9XCIgPlxuICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICA6YXBwZWFyLWFjdGl2ZS1jbGFzcz1cInJvdXRlLm1ldGEuZW50ZXJBbmltYXRpb25cIlxuICAgICAgICAgICAgICAgIDpsZWF2ZS1hY3RpdmUtY2xhc3M9XCJyb3V0ZS5tZXRhLmxlYXZlQW5pbWF0aW9uXCJcbiAgICAgICAgICAgICAgICA6ZHVyYXRpb249XCJ7XG4gICAgICAgICAgICAgICAgICBlbnRlcjogMTAwLFxuICAgICAgICAgICAgICAgICAgbGVhdmU6IDIwMFxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgIGFwcGVhclxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxjb21wb25lbnQgc3R5bGU9XCJoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcIiA6aXM9XCJDb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9yb3V0ZXItdmlldz5cbiAgICAgICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuICAgIDwvcS1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgRGFyaywgU2NyZWVuIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcblxuY29uc3QgaXNNb2JpbGUgPSBjb21wdXRlZCgoKSA9PiBTY3JlZW4ubHQubWQpO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmxpZ2h0LS1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RUZBMyAhaW1wb3J0YW50O1xufVxuXG4uZGFyay0tYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjFCMjIgIWltcG9ydGFudDtcbn1cblxuLmxpZ2h0LS1iYWxscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcbn1cblxuLmRhcmstLWJhbGxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE2NjA4O1xufVxuXG4uYmFsbHMge1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYWxsczpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbjogcHVsc2UxIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5iYWxsczpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbjogcHVsc2UyIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2UxIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTcpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZTIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE3KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4uZmFkZS1lbnRlci1mcm9tLCAuZmFkZS1sZWF2ZS10bywgLmZhZGUtbGVhdmUtYWN0aXZlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZhZGUtZW50ZXItYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjlzIGVhc2Utb3V0O1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBbURBLFVBQU0sV0FBVyxTQUFTLE1BQU0sT0FBTyxHQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
