import { _ as _export_sfc, d as defineComponent, a as computed, A as reactive, y as ref, e as createBlock, w as withCtx, n as normalizeClass, u as unref, S as Screen, o as openBlock, h as createBaseVNode, f as createVNode, ai as QBtn, P as Plugin, ae as toDisplayString, ad as createTextVNode } from "./index.f0dfeb9e.js";
import { Q as QInput } from "./QInput.71830f22.js";
import { Q as QForm } from "./QForm.c0f56036.js";
import { Q as QPage } from "./QPage.8c463601.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
import "./format.801e7424.js";
const _hoisted_1 = { class: "q-px-md q-pt-lg" };
const _hoisted_2 = { class: "text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ForgotPassword",
  setup(__props) {
    const isMobile = computed(() => Screen.lt.md);
    const isXS = computed(() => Screen.lt.sm);
    const data = reactive({
      email: ""
    });
    const formRef = ref(null);
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
              }, toDisplayString(_ctx.$t("forgotPassword.forgotPassword")), 3),
              createBaseVNode("p", {
                class: normalizeClass({
                  "fs-12": unref(isMobile),
                  "q-mt-md": unref(isMobile)
                })
              }, [
                createTextVNode(toDisplayString(_ctx.$t("forgotPassword.introduce")) + " ", 1),
                createBaseVNode("span", {
                  class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                }, toDisplayString(_ctx.$t("fields.email").toLocaleLowerCase()), 3),
                createTextVNode(" " + toDisplayString(_ctx.$t("forgotPassword.willReceive")) + " ", 1),
                createBaseVNode("span", {
                  class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                }, toDisplayString(_ctx.$t("forgotPassword.instructions")), 3)
              ], 2),
              createVNode(QForm, {
                class: "mt-35",
                ref_key: "formRef",
                ref: formRef,
                greedy: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("p", _hoisted_2, toDisplayString(_ctx.$t("fields.email")), 1),
                  createVNode(QInput, {
                    dark: "",
                    outlined: "",
                    rounded: "",
                    modelValue: data.email,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => data.email = $event),
                    color: "transparent",
                    type: "email",
                    placeholder: "money@qoripay.com",
                    class: normalizeClass(["q-mb-md", {
                      "fs-13": unref(isMobile),
                      "rounded--dark-input--withAlert--space": unref(Plugin).isActive,
                      "rounded--light-input--withAlert--space text-nv-light-accent": !unref(Plugin).isActive
                    }]),
                    rules: [
                      (val) => val && val.match(
                        /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                      ) || _ctx.$t("validations.email")
                    ]
                  }, null, 8, ["modelValue", "class", "rules"]),
                  createVNode(QBtn, {
                    color: `nv-${unref(GetSuffix)("primary")}`,
                    class: "full-width br-20 py-12 q-mt-sm fs-16",
                    unelevated: "",
                    "no-caps": "",
                    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$router.push("/verify-email"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("buttons.send")), 1)
                    ]),
                    _: 1
                  }, 8, ["color"])
                ]),
                _: 1
              }, 512)
            ])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
var ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ForgotPassword.vue"]]);
export { ForgotPassword as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9yZ290UGFzc3dvcmQuZWQzMDQzM2EuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9BdXRoL3BhZ2VzL0ZvcmdvdFBhc3N3b3JkLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZVxuICAgICAgICBjbGFzcz1cImhwLTEwMFwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1udi1kYXJrJzogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICdiZy1udi1saWdodCc6ICFEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgJ2ZsZXggY29sdW1uIGZsZXgtY2VudGVyJyA6ICFpc01vYmlsZVxuICAgICAgICB9XCJcbiAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgJ2ZsZXgganVzdGlmeS1lbmQgcS1wdC1sZyBxLXB4LW1kJyA6IGlzTW9iaWxlLFxuICAgICAgICAgICAgICAgICd3cC0xMDAgZmxleCBqdXN0aWZ5LWVuZCcgOiAhaXNNb2JpbGVcbiAgICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvbG9naW4nKVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJxLXB4LW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcHgtbWQgcS1wdC1sZ1wiPlxuICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAnZnMtMjMnOiBpc1hTLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC13aGl0ZSc6IERhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLXBhZGRpbmcgcS1tYi14cyBxLW10LXNtIHRleHQtbGVmdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgJHQoJ2ZvcmdvdFBhc3N3b3JkLmZvcmdvdFBhc3N3b3JkJykgfX1cbiAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAnZnMtMTInOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgJ3EtbXQtbWQnOiBpc01vYmlsZVxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdmb3Jnb3RQYXNzd29yZC5pbnRyb2R1Y2UnKSB9fVxuICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImB0ZXh0LW52LSR7R2V0U3VmZml4KCdhY2NlbnQnKX0gcS1teC14c2BcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoJ2ZpZWxkcy5lbWFpbCcpLnRvTG9jYWxlTG93ZXJDYXNlKCkgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge3sgJHQoJ2ZvcmdvdFBhc3N3b3JkLndpbGxSZWNlaXZlJykgfX1cbiAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJgdGV4dC1udi0ke0dldFN1ZmZpeCgnYWNjZW50Jyl9IHEtbXgteHNgXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdmb3Jnb3RQYXNzd29yZC5pbnN0cnVjdGlvbnMnKSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHEtZm9ybSBjbGFzcz1cIm10LTM1XCIgcmVmPVwiZm9ybVJlZlwiIGdyZWVkeT5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1udi1saWdodC10ZXJ0aWFyeSBxLW10LW5vbmUgcS1tYi1zbSBmbGV4IGZsZXgtaW5saW5lIGl0ZW1zLWNlbnRlciBmcy0xNCBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdmaWVsZHMuZW1haWwnKSB9fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGEuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICA6Y29sb3I9XCIndHJhbnNwYXJlbnQnXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtb25leUBxb3JpcGF5LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcy0xMycgOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyb3VuZGVkLS1kYXJrLWlucHV0LS13aXRoQWxlcnQtLXNwYWNlJzogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyb3VuZGVkLS1saWdodC1pbnB1dC0td2l0aEFsZXJ0LS1zcGFjZSB0ZXh0LW52LWxpZ2h0LWFjY2VudCc6ICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLm1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL14oW1xcZGEtel9cXC4tXSspQChbXFxkYS16XFwuLV0rKVxcLihbYS16XFwuXXsyLDZ9KSQvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHQoJ3ZhbGlkYXRpb25zLmVtYWlsJylcbiAgICAgICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIDpjb2xvcj1cImBudi0ke0dldFN1ZmZpeCgncHJpbWFyeScpfWBcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBici0yMCBweS0xMiBxLW10LXNtIGZzLTE2XCJcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3ZlcmlmeS1lbWFpbCcpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyAkdCgnYnV0dG9ucy5zZW5kJykgfX1cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IERhcmssIFNjcmVlbiB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVhY3RpdmUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgR2V0U3VmZml4IGZyb20gJy4uLy4uL2FwcC9zaGFyZWQvaGVscGVycy9HZXRTdWZmaXgnO1xuXG5jb25zdCBpc01vYmlsZSA9IGNvbXB1dGVkKCgpID0+IFNjcmVlbi5sdC5tZCk7XG5jb25zdCBpc1hTID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0LnNtKTtcblxuY29uc3QgZGF0YSA9IHJlYWN0aXZlKHtcbiAgICBlbWFpbDogJydcbn0pO1xuY29uc3QgZm9ybVJlZiA9IHJlZihudWxsKTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBdUdBLFVBQU0sV0FBVyxTQUFTLE1BQU0sT0FBTyxHQUFHLEVBQUU7QUFDNUMsVUFBTSxPQUFPLFNBQVMsTUFBTSxPQUFPLEdBQUcsRUFBRTtBQUV4QyxVQUFNLE9BQU8sU0FBUztBQUFBLE1BQ2xCLE9BQU87QUFBQSxJQUFBLENBQ1Y7QUFDSyxVQUFBLFVBQVUsSUFBSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
