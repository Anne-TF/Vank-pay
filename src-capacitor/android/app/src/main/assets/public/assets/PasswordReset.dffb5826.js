import { _ as _export_sfc, d as defineComponent, a as computed, A as reactive, y as ref, e as createBlock, w as withCtx, n as normalizeClass, u as unref, S as Screen, o as openBlock, h as createBaseVNode, f as createVNode, ai as QBtn, P as Plugin, ae as toDisplayString, ad as createTextVNode, g as withDirectives, v as vShow, af as QIcon } from "./index.f0dfeb9e.js";
import { Q as QInput } from "./QInput.71830f22.js";
import { Q as QForm } from "./QForm.c0f56036.js";
import { Q as QPage } from "./QPage.8c463601.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
import "./format.801e7424.js";
const _hoisted_1 = { class: "q-px-md q-pt-lg" };
const _hoisted_2 = { class: "text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between" };
const _hoisted_3 = { class: "text-nv-light-tertiary q-mt-md q-mb-sm flex flex-inline items-center fs-14 justify-between" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PasswordReset",
  setup(__props) {
    const isMobile = computed(() => Screen.lt.md);
    const isXS = computed(() => Screen.lt.sm);
    const data = reactive({
      password: "",
      confirmPassword: ""
    });
    const isPwd = ref(true);
    const isPwd2 = ref(true);
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
              }, toDisplayString(_ctx.$t("passwordReset.passwordReset")), 3),
              createBaseVNode("p", {
                class: normalizeClass({
                  "fs-12": unref(isMobile),
                  "q-mt-md": unref(isMobile)
                })
              }, [
                createTextVNode(toDisplayString(_ctx.$t("passwordReset.introduce")) + " ", 1),
                createBaseVNode("span", {
                  class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                }, toDisplayString(_ctx.$t("passwordReset.yourPassword").toLocaleLowerCase()), 3)
              ], 2),
              createVNode(QForm, {
                class: "mt-35",
                ref_key: "formRef",
                ref: formRef,
                greedy: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("p", _hoisted_2, toDisplayString(_ctx.$t("fields.password")), 1),
                  createVNode(QInput, {
                    dark: "",
                    outlined: "",
                    rounded: "",
                    modelValue: data.password,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => data.password = $event),
                    placeholder: "************",
                    color: "transparent",
                    type: isPwd.value ? "password" : "text",
                    class: normalizeClass({
                      "fs-13": unref(isMobile),
                      "rounded--dark-input--withAlert--space": unref(Plugin).isActive,
                      "rounded--light-input--withAlert--space text-nv-light-accent": !unref(Plugin).isActive
                    }),
                    rules: [
                      (val) => val && val.length > 7 || _ctx.$t("validations.password")
                    ]
                  }, {
                    append: withCtx(() => [
                      withDirectives(createVNode(QIcon, {
                        name: isPwd.value ? "visibility" : "visibility_off",
                        class: "cursor-pointer",
                        onClick: _cache[1] || (_cache[1] = ($event) => isPwd.value = !isPwd.value)
                      }, null, 8, ["name"]), [
                        [vShow, data.password.length > 0]
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "type", "class", "rules"]),
                  createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("fields.confirmPassword")), 1),
                  createVNode(QInput, {
                    dark: "",
                    outlined: "",
                    rounded: "",
                    modelValue: data.confirmPassword,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => data.confirmPassword = $event),
                    placeholder: "************",
                    color: "transparent",
                    type: isPwd2.value ? "password" : "text",
                    class: normalizeClass({
                      "fs-13": unref(isMobile),
                      "rounded--dark-input--withAlert--space": unref(Plugin).isActive,
                      "rounded--light-input--withAlert--space text-nv-light-accent": !unref(Plugin).isActive
                    }),
                    rules: [
                      (val) => val && val.length > 7 || _ctx.$t("validations.password"),
                      (val) => val === data.password || _ctx.$t("validations.passwordsDontMatch")
                    ]
                  }, {
                    append: withCtx(() => [
                      withDirectives(createVNode(QIcon, {
                        name: isPwd2.value ? "visibility" : "visibility_off",
                        class: "cursor-pointer",
                        onClick: _cache[3] || (_cache[3] = ($event) => isPwd2.value = !isPwd2.value)
                      }, null, 8, ["name"]), [
                        [vShow, data.confirmPassword.length > 0]
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "type", "class", "rules"]),
                  createVNode(QBtn, {
                    color: `nv-${unref(GetSuffix)("primary")}`,
                    class: "full-width br-20 py-12 mt-30 fs-16",
                    unelevated: "",
                    "no-caps": "",
                    onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$router.push("/login"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("buttons.continue")), 1)
                    ]),
                    _: 1
                  }, 8, ["color"])
                ]),
                _: 1
              }, 512)
            ])
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
var PasswordReset = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "PasswordReset.vue"]]);
export { PasswordReset as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFzc3dvcmRSZXNldC5kZmZiNTgyNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0F1dGgvcGFnZXMvUGFzc3dvcmRSZXNldC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxxLXBhZ2VcbiAgICAgICAgY2xhc3M9XCJocC0xMDBcIlxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAnYmctbnYtZGFyayc6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAnYmctbnYtbGlnaHQnOiAhRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICdmbGV4IGNvbHVtbiBmbGV4LWNlbnRlcic6ICFpc01vYmlsZVxuICAgICAgICB9XCJcbiAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnd3AtMzAnOiBTY3JlZW4ubGcsXG4gICAgICAgICAgICAgICAgJ3dwLTQwJzogU2NyZWVuLmx0LmxnICYmICFpc01vYmlsZVxuICAgICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICdmbGV4IGp1c3RpZnktZW5kIHEtcHQtbGcgcS1weC1tZCc6IGlzTW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAnd3AtMTAwIGZsZXgganVzdGlmeS1lbmQnOiAhaXNNb2JpbGVcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL2xvZ2luJylcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxLXB4LW5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcHgtbWQgcS1wdC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZnMtMjMnOiBpc1hTLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiBEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLXBhZGRpbmcgcS1tYi14cyBxLW10LXNtIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdCgncGFzc3dvcmRSZXNldC5wYXNzd29yZFJlc2V0JykgfX1cbiAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTEyJzogaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAncS1tdC1tZCc6IGlzTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoJ3Bhc3N3b3JkUmVzZXQuaW50cm9kdWNlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfSBxLW14LXhzYFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdCgncGFzc3dvcmRSZXNldC55b3VyUGFzc3dvcmQnKS50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPHEtZm9ybSBjbGFzcz1cIm10LTM1XCIgcmVmPVwiZm9ybVJlZlwiIGdyZWVkeT5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1udi1saWdodC10ZXJ0aWFyeSBxLW10LW5vbmUgcS1tYi1zbSBmbGV4IGZsZXgtaW5saW5lIGl0ZW1zLWNlbnRlciBmcy0xNCBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnZmllbGRzLnBhc3N3b3JkJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRhLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKioqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIid0cmFuc3BhcmVudCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnR5cGU9XCJpc1B3ZCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcy0xMycgOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncm91bmRlZC0tZGFyay1pbnB1dC0td2l0aEFsZXJ0LS1zcGFjZSc6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtLWxpZ2h0LWlucHV0LS13aXRoQWxlcnQtLXNwYWNlIHRleHQtbnYtbGlnaHQtYWNjZW50JzogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwgJiYgdmFsLmxlbmd0aCA+IDcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KCd2YWxpZGF0aW9ucy5wYXNzd29yZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJkYXRhLnBhc3N3b3JkLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImlzUHdkID8gJ3Zpc2liaWxpdHknIDogJ3Zpc2liaWxpdHlfb2ZmJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJpc1B3ZCA9ICFpc1B3ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LW52LWxpZ2h0LXRlcnRpYXJ5IHEtbXQtbWQgcS1tYi1zbSBmbGV4IGZsZXgtaW5saW5lIGl0ZW1zLWNlbnRlciBmcy0xNCBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnZmllbGRzLmNvbmZpcm1QYXNzd29yZCcpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0YS5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKioqKipcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiJ3RyYW5zcGFyZW50J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dHlwZT1cImlzUHdkMiA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcy0xMycgOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncm91bmRlZC0tZGFyay1pbnB1dC0td2l0aEFsZXJ0LS1zcGFjZSc6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtLWxpZ2h0LWlucHV0LS13aXRoQWxlcnQtLXNwYWNlIHRleHQtbnYtbGlnaHQtYWNjZW50JzogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwgJiYgdmFsLmxlbmd0aCA+IDcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KCd2YWxpZGF0aW9ucy5wYXNzd29yZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9PT0gZGF0YS5wYXNzd29yZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdCgndmFsaWRhdGlvbnMucGFzc3dvcmRzRG9udE1hdGNoJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImRhdGEuY29uZmlybVBhc3N3b3JkLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImlzUHdkMiA/ICd2aXNpYmlsaXR5JyA6ICd2aXNpYmlsaXR5X29mZidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaXNQd2QyID0gIWlzUHdkMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImBudi0ke0dldFN1ZmZpeCgncHJpbWFyeScpfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmdWxsLXdpZHRoIGJyLTIwIHB5LTEyIG10LTMwIGZzLTE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL2xvZ2luJylcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnYnV0dG9ucy5jb250aW51ZScpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICAgICAgPC9xLWZvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgRGFyaywgU2NyZWVuIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkLCByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBHZXRTdWZmaXggZnJvbSAnLi4vLi4vYXBwL3NoYXJlZC9oZWxwZXJzL0dldFN1ZmZpeCc7XG5cbmNvbnN0IGlzTW9iaWxlID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0Lm1kKTtcbmNvbnN0IGlzWFMgPSBjb21wdXRlZCgoKSA9PiBTY3JlZW4ubHQuc20pO1xuXG5jb25zdCBkYXRhID0gcmVhY3RpdmUoe1xuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBjb25maXJtUGFzc3dvcmQ6ICcnXG59KTtcblxuY29uc3QgaXNQd2QgPSByZWY8Ym9vbGVhbj4odHJ1ZSk7XG5jb25zdCBpc1B3ZDIgPSByZWY8Ym9vbGVhbj4odHJ1ZSk7XG5jb25zdCBmb3JtUmVmID0gcmVmKG51bGwpO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBb0pBLFVBQU0sV0FBVyxTQUFTLE1BQU0sT0FBTyxHQUFHLEVBQUU7QUFDNUMsVUFBTSxPQUFPLFNBQVMsTUFBTSxPQUFPLEdBQUcsRUFBRTtBQUV4QyxVQUFNLE9BQU8sU0FBUztBQUFBLE1BQ2xCLFVBQVU7QUFBQSxNQUNWLGlCQUFpQjtBQUFBLElBQUEsQ0FDcEI7QUFFSyxVQUFBLFFBQVEsSUFBYSxJQUFJO0FBQ3pCLFVBQUEsU0FBUyxJQUFhLElBQUk7QUFDMUIsVUFBQSxVQUFVLElBQUksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
