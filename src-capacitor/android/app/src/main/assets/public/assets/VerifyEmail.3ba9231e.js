import { _ as _export_sfc, d as defineComponent, a as computed, e as createBlock, w as withCtx, n as normalizeClass, u as unref, S as Screen, o as openBlock, h as createBaseVNode, f as createVNode, ai as QBtn, P as Plugin, ae as toDisplayString, ad as createTextVNode } from "./index.f0dfeb9e.js";
import { Q as QPage } from "./QPage.8c463601.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
const _hoisted_1 = { class: "q-px-md q-pt-lg" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VerifyEmail",
  setup(__props) {
    const isMobile = computed(() => Screen.lt.md);
    const isXS = computed(() => Screen.lt.sm);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: normalizeClass(["hp-100", {
          "bg-nv-dark": unref(Plugin).isActive,
          "bg-nv-light": !unref(Plugin).isActive,
          "flex column flex-center": !unref(isMobile)
        }])
      }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
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
                  "text-white": unref(Plugin).isActive
                }, "no-padding q-mb-xs q-mt-sm text-left"])
              }, toDisplayString(_ctx.$t("verifyEmail.verifyEmail")), 3),
              createBaseVNode("p", {
                class: normalizeClass({
                  "fs-12": unref(isMobile),
                  "q-mt-md": unref(isMobile)
                })
              }, [
                createTextVNode(toDisplayString(_ctx.$t("verifyEmail.theCode")) + " ", 1),
                createBaseVNode("span", {
                  class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                }, toDisplayString(_ctx.$t("verifyEmail.activation").toLocaleLowerCase()), 3),
                createTextVNode(" " + toDisplayString(_ctx.$t("verifyEmail.wasSended")) + " ", 1),
                createBaseVNode("span", {
                  class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                }, toDisplayString(_ctx.$t("verifyEmail.toYourAccount")), 3)
              ], 2),
              createVNode(QBtn, {
                color: `nv-${unref(GetSuffix)("primary")}`,
                class: "full-width br-20 py-12 q-mt-sm fs-16",
                unelevated: "",
                "no-caps": "",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push("/password-reset"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("buttons.login")), 1)
                ]),
                _: 1
              }, 8, ["color"])
            ])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
var VerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "VerifyEmail.vue"]]);
export { VerifyEmail as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZ5RW1haWwuM2JhOTIzMWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BdXRoL3BhZ2VzL1ZlcmlmeUVtYWlsLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZVxuICAgICAgICBjbGFzcz1cImhwLTEwMFwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1udi1kYXJrJzogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICdiZy1udi1saWdodCc6ICFEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgJ2ZsZXggY29sdW1uIGZsZXgtY2VudGVyJzogIWlzTW9iaWxlXG4gICAgICAgIH1cIlxuICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICdmbGV4IGp1c3RpZnktZW5kIHEtcHQtbGcgcS1weC1tZCc6IGlzTW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAnd3AtMTAwIGZsZXgganVzdGlmeS1lbmQnOiAhaXNNb2JpbGVcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL2xvZ2luJylcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLXB4LW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcHgtbWQgcS1wdC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZnMtMjMnOiBpc1hTLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiBEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLXBhZGRpbmcgcS1tYi14cyBxLW10LXNtIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdCgndmVyaWZ5RW1haWwudmVyaWZ5RW1haWwnKSB9fVxuICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZnMtMTInOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdxLW10LW1kJzogaXNNb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdCgndmVyaWZ5RW1haWwudGhlQ29kZScpIH19XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImB0ZXh0LW52LSR7R2V0U3VmZml4KCdhY2NlbnQnKX0gcS1teC14c2BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCd2ZXJpZnlFbWFpbC5hY3RpdmF0aW9uJykudG9Mb2NhbGVMb3dlckNhc2UoKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCd2ZXJpZnlFbWFpbC53YXNTZW5kZWQnKSB9fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJgdGV4dC1udi0ke0dldFN1ZmZpeCgnYWNjZW50Jyl9IHEtbXgteHNgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgndmVyaWZ5RW1haWwudG9Zb3VyQWNjb3VudCcpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiYG52LSR7R2V0U3VmZml4KCdwcmltYXJ5Jyl9YFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBici0yMCBweS0xMiBxLW10LXNtIGZzLTE2XCJcbiAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgICAgICAgICBuby1jYXBzXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3Bhc3N3b3JkLXJlc2V0JylcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoJ2J1dHRvbnMubG9naW4nKSB9fVxuICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgRGFyaywgU2NyZWVuIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkLCByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBHZXRTdWZmaXggZnJvbSAnLi4vLi4vYXBwL3NoYXJlZC9oZWxwZXJzL0dldFN1ZmZpeCc7XG5cbmNvbnN0IGlzTW9iaWxlID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0Lm1kKTtcbmNvbnN0IGlzWFMgPSBjb21wdXRlZCgoKSA9PiBTY3JlZW4ubHQuc20pO1xuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBd0VBLFVBQU0sV0FBVyxTQUFTLE1BQU0sT0FBTyxHQUFHLEVBQUU7QUFDNUMsVUFBTSxPQUFPLFNBQVMsTUFBTSxPQUFPLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
