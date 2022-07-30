import { _ as _export_sfc, d as defineComponent, a as computed, y as ref, e as createBlock, w as withCtx, n as normalizeClass, u as unref, S as Screen, o as openBlock, h as createBaseVNode, f as createVNode, ai as QBtn, P as Plugin, ae as toDisplayString, ad as createTextVNode } from "./index.f0dfeb9e.js";
import { Q as QPage } from "./QPage.8c463601.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
import { E as EncodeText, C as CodeInput } from "./EncodeText.99f002d7.js";
import "./QInput.71830f22.js";
import "./format.801e7424.js";
const _hoisted_1 = { class: "q-px-md q-pt-lg" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ValidateEmail",
  setup(__props) {
    const isMobile = computed(() => Screen.lt.md);
    const isXS = computed(() => Screen.lt.sm);
    const code = ref(null);
    const setCode = (value) => {
      code.value = value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: normalizeClass(["hp-100", {
          "bg-nv-dark": unref(Plugin).isActive,
          "bg-nv-light": !unref(Plugin).isActive,
          "flex column flex-center": !unref(isMobile)
        }])
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass({
              "wp-30": unref(Screen).lg,
              "wp-40": unref(Screen).lt.lg && !unref(isMobile)
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
                  "text-white": unref(Plugin).isActive
                }, "no-padding q-mb-xs q-mt-sm text-left"])
              }, toDisplayString(_ctx.$t("codeValidation.twoFAValidation")), 3),
              createBaseVNode("p", {
                class: normalizeClass({
                  "fs-12": unref(isMobile),
                  "mt-25": unref(isMobile)
                })
              }, [
                createTextVNode(toDisplayString(_ctx.$t("codeValidation.theCode")) + " ", 1),
                createBaseVNode("span", {
                  class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                }, toDisplayString(_ctx.$t("codeValidation.validation")), 3),
                createTextVNode(" " + toDisplayString(_ctx.$t("codeValidation.wasSend")), 1)
              ], 2),
              createBaseVNode("p", {
                class: normalizeClass([{
                  "fs-14": unref(isMobile),
                  "fs-16": !unref(isMobile)
                }, "mt-40 q-mb-lg"])
              }, [
                createTextVNode(toDisplayString(_ctx.$t("codeValidation.sendTo")) + " ", 1),
                createBaseVNode("span", {
                  class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                }, toDisplayString(unref(EncodeText)("qoripay@email.com", "email")), 3)
              ], 2),
              createVNode(CodeInput, {
                onAddCode: setCode,
                onRemoveCode: setCode
              }),
              createVNode(QBtn, {
                color: `nv-${unref(GetSuffix)("primary")}`,
                class: "full-width br-20 py-12 mt-40 fs-16",
                unelevated: "",
                "no-caps": "",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push("/login"))
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
      }, 8, ["class"]);
    };
  }
});
var ValidateEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ValidateEmail.vue"]]);
export { ValidateEmail as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGVFbWFpbC5kYjc4NDRlZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0F1dGgvcGFnZXMvVmFsaWRhdGVFbWFpbC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxxLXBhZ2VcbiAgICAgICAgY2xhc3M9XCJocC0xMDBcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAnYmctbnYtZGFyayc6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAnYmctbnYtbGlnaHQnOiAhRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICdmbGV4IGNvbHVtbiBmbGV4LWNlbnRlcic6ICFpc01vYmlsZVxuICAgICAgICB9XCJcbiAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnd3AtMzAnOiBTY3JlZW4ubGcsXG4gICAgICAgICAgICAgICAgJ3dwLTQwJzogU2NyZWVuLmx0LmxnICYmICFpc01vYmlsZVxuICAgICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICdmbGV4IGp1c3RpZnktZW5kIHEtcHQtbGcgcS1weC1tZCc6IGlzTW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAnd3AtMTAwIGZsZXgganVzdGlmeS1lbmQnOiAhaXNNb2JpbGVcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL2xvZ2luJylcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLXB4LW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcHgtbWQgcS1wdC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZnMtMjMnOiBpc1hTLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiBEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLXBhZGRpbmcgcS1tYi14cyBxLW10LXNtIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdCgnY29kZVZhbGlkYXRpb24udHdvRkFWYWxpZGF0aW9uJykgfX1cbiAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTEyJzogaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbXQtMjUnOiBpc01vYmlsZVxuICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdjb2RlVmFsaWRhdGlvbi50aGVDb2RlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfSBxLW14LXhzYFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdCgnY29kZVZhbGlkYXRpb24udmFsaWRhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdjb2RlVmFsaWRhdGlvbi53YXNTZW5kJykgfX1cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTE0JzogaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnMtMTYnIDogIWlzTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTQwIHEtbWItbGdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoJ2NvZGVWYWxpZGF0aW9uLnNlbmRUbycpIH19XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImB0ZXh0LW52LSR7R2V0U3VmZml4KCdhY2NlbnQnKX0gcS1teC14c2BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAge3sgRW5jb2RlRW1haWwoJ3FvcmlwYXlAZW1haWwuY29tJywgJ2VtYWlsJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxDb2RlSW5wdXQgQGFkZENvZGU9XCJzZXRDb2RlXCIgQHJlbW92ZUNvZGU9XCJzZXRDb2RlXCIgLz5cblxuICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImBudi0ke0dldFN1ZmZpeCgncHJpbWFyeScpfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIGJyLTIwIHB5LTEyIG10LTQwIGZzLTE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL2xvZ2luJylcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnYnV0dG9ucy5jb250aW51ZScpIH19XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBEYXJrLCBTY3JlZW4gfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IEdldFN1ZmZpeCBmcm9tICcuLi8uLi9hcHAvc2hhcmVkL2hlbHBlcnMvR2V0U3VmZml4JztcbmltcG9ydCBDb2RlSW5wdXQgZnJvbSAnLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29kZUlucHV0LnZ1ZSc7XG5pbXBvcnQgRW5jb2RlRW1haWwgZnJvbSAnLi4vLi4vYXBwL3NoYXJlZC9oZWxwZXJzL0VuY29kZVRleHQnO1xuXG5jb25zdCBpc01vYmlsZSA9IGNvbXB1dGVkKCgpID0+IFNjcmVlbi5sdC5tZCk7XG5jb25zdCBpc1hTID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0LnNtKTtcblxuY29uc3QgY29kZSA9IHJlZjxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuY29uc3Qgc2V0Q29kZSA9ICh2YWx1ZTogc3RyaW5nKSA9Plxue1xuICAgIGNvZGUudmFsdWUgPSB2YWx1ZTtcbn07XG5cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUE2RkEsVUFBTSxXQUFXLFNBQVMsTUFBTSxPQUFPLEdBQUcsRUFBRTtBQUM1QyxVQUFNLE9BQU8sU0FBUyxNQUFNLE9BQU8sR0FBRyxFQUFFO0FBRWxDLFVBQUEsT0FBTyxJQUFtQixJQUFJO0FBRTlCLFVBQUEsVUFBVSxDQUFDLFVBQ2pCO0FBQ0ksV0FBSyxRQUFRO0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
