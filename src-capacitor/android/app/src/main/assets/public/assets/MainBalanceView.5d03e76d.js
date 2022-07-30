import { k as createComponent, M as useDarkProps, O as useDark, a as computed, l as h, s as getCurrentInstance, _ as _export_sfc, d as defineComponent, y as ref, e as createBlock, w as withCtx, n as normalizeClass, u as unref, S as Screen, o as openBlock, h as createBaseVNode, ad as createTextVNode, ae as toDisplayString, P as Plugin, f as createVNode, ac as createElementBlock, ak as renderList, aj as Fragment, ag as QAvatar, j as normalizeStyle, g as withDirectives, v as vShow, af as QIcon } from "./index.f0dfeb9e.js";
import { Q as QInput } from "./QInput.71830f22.js";
import { a as QCardSection, Q as QCard } from "./QCard.bd3b760c.js";
import { Q as QPage } from "./QPage.8c463601.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
import "./format.801e7424.js";
const insetMap = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
};
const margins = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
};
var QSeparator = createComponent({
  name: "QSeparator",
  props: {
    ...useDarkProps,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(props) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const orientClass = computed(() => ` q-separator--${orientation.value}`);
    const insetClass = computed(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
    const classes = computed(
      () => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : "")
    );
    const style = computed(() => {
      const acc = {};
      if (props.size !== void 0) {
        acc[props.vertical === true ? "width" : "height"] = props.size;
      }
      if (props.spaced !== false) {
        const size = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
        const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
        acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size;
      }
      return acc;
    });
    return () => h("hr", {
      class: classes.value,
      style: style.value,
      "aria-orientation": orientation.value
    });
  }
});
const _hoisted_1 = ["data-icon"];
const _hoisted_2 = { class: "flex justify-between mb-30" };
const _hoisted_3 = { class: "fs-16" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", {
  class: "iconify fs-18",
  "data-icon": "arcticons:xiaoyuan-search"
}, null, -1);
const _hoisted_5 = { class: "flex flex-inline wp-70" };
const _hoisted_6 = { class: "ml-15" };
const _hoisted_7 = { class: "wp-30 flex items-center text-light justify-end fs-17" };
const _hoisted_8 = { class: "flex justify-between mb-30" };
const _hoisted_9 = { class: "fs-16" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", {
  class: "iconify fs-18",
  "data-icon": "arcticons:xiaoyuan-search"
}, null, -1);
const _hoisted_11 = { class: "flex flex-inline wp-70" };
const _hoisted_12 = { class: "fs-15" };
const _hoisted_13 = { class: "ml-15" };
const _hoisted_14 = { class: "wp-30 flex items-center text-light justify-end fs-17" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainBalanceView",
  setup(__props) {
    const watchBalance = ref(true);
    const search = ref("");
    const search2 = ref("");
    const onFocus = ref(false);
    const onFocus2 = ref(false);
    const cards = [
      {
        name: "Mi tarjeta",
        user: "User crypto",
        type: "VISA",
        quantity: "4.565,00"
      },
      {
        name: "Mi tarjeta 2",
        user: "User crypto",
        type: "VISA",
        quantity: "1.565,00"
      }
    ];
    const wallets = [
      {
        acronym: "BTC",
        name: "Bitcoin",
        quantity: "0,00"
      },
      {
        acronym: "USDT",
        name: "Tether USDT",
        quantity: "1,00"
      },
      {
        acronym: "ETH",
        name: "Ethereum",
        quantity: "3.34,00"
      },
      {
        acronym: "BTC",
        name: "Bitcoin",
        quantity: "4.565,00"
      },
      {
        acronym: "BTC",
        name: "Bitcoin",
        quantity: "4.565,00"
      }
    ];
    const isMobile = computed(() => Screen.lt.md);
    const getBalance = computed(() => "80.60");
    const unwatch = () => {
      watchBalance.value = !watchBalance.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: normalizeClass([{
          "q-py-md": unref(isMobile)
        }, "hp-100"])
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass({
              "mt-40 flex items-center q-px-lg": unref(isMobile)
            })
          }, [
            createTextVNode(toDisplayString(_ctx.$t("balance.totalBalance")) + " ", 1),
            createBaseVNode("div", { onClick: unwatch }, [
              createBaseVNode("span", {
                class: "iconify fs-20 q-ml-sm cursor-pointer",
                "data-icon": watchBalance.value ? "codicon:eye" : "codicon:eye-closed"
              }, null, 8, _hoisted_1)
            ]),
            createBaseVNode("h4", {
              class: normalizeClass(["q-mx-none q-mb-none text-light wp-100 q-mt-sm", {
                "text-nv-light": unref(Plugin).isActive,
                "text-nv-dark": !unref(Plugin).isActive
              }])
            }, toDisplayString(watchBalance.value ? "$".concat(unref(getBalance)) : "****"), 3)
          ], 2),
          createVNode(QSeparator, {
            size: "0.3em",
            color: "nv-ultra-dark",
            class: "mt-30"
          }),
          createBaseVNode("div", {
            class: normalizeClass({
              "mt-10 q-px-lg": unref(isMobile)
            })
          }, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.$t("balance.cards")), 1),
              createVNode(QInput, {
                class: normalizeClass(["ultra-dense-input--dark", {
                  "wp-35": !onFocus.value,
                  "wp-50": onFocus.value
                }]),
                outlined: "",
                modelValue: search.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
                onFocus: _cache[1] || (_cache[1] = ($event) => onFocus.value = true),
                onBlur: _cache[2] || (_cache[2] = ($event) => onFocus.value = false),
                color: "transparent",
                rounded: ""
              }, {
                prepend: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            (openBlock(), createElementBlock(Fragment, null, renderList(cards, (card, index) => {
              return createVNode(QCard, {
                key: index,
                flat: "",
                class: normalizeClass(["mb-10 br-20 py-5", `bg-nv-${unref(GetSuffix)("tertiary")}-opacity`])
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, {
                    class: "flex flex-inline",
                    style: { "opacity": "1 !important" }
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(QAvatar, {
                          size: "3.9em",
                          style: normalizeStyle(`background-color: ${unref(Plugin).isActive ? "#717A8A" : "#1d2229"};`)
                        }, {
                          default: withCtx(() => [
                            withDirectives(createVNode(QIcon, {
                              size: "1.5em",
                              name: "img:icons/visa.svg"
                            }, null, 512), [
                              [vShow, card.type === "VISA"]
                            ])
                          ]),
                          _: 2
                        }, 1032, ["style"]),
                        createBaseVNode("div", _hoisted_6, [
                          createBaseVNode("h5", {
                            class: normalizeClass(["no-margin text-medium fs-17", {
                              "text-nv-light": unref(Plugin).isActive,
                              "text-nv-dark": !unref(Plugin).isActive
                            }])
                          }, toDisplayString(card.name), 3),
                          createBaseVNode("p", {
                            class: normalizeClass([{
                              "text-nv-light-tertiary": unref(Plugin).isActive,
                              "text-nv-light-secondary": !unref(Plugin).isActive
                            }, "no-margin fs-13 q-mt-xs text-light"])
                          }, toDisplayString(card.user), 3)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_7, " $ " + toDisplayString(card.quantity), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["class"]);
            }), 64))
          ], 2),
          createVNode(QSeparator, {
            size: "0.3em",
            color: "nv-ultra-dark",
            class: "mt-13"
          }),
          createBaseVNode("div", {
            class: normalizeClass({
              "mt-10 q-px-lg": unref(isMobile)
            })
          }, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("span", _hoisted_9, toDisplayString(_ctx.$t("balance.wallets")), 1),
              createVNode(QInput, {
                class: normalizeClass(["ultra-dense-input--dark", {
                  "wp-35": !onFocus2.value,
                  "wp-50": onFocus2.value
                }]),
                outlined: "",
                modelValue: search2.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search2.value = $event),
                onFocus: _cache[4] || (_cache[4] = ($event) => onFocus2.value = true),
                onBlur: _cache[5] || (_cache[5] = ($event) => onFocus2.value = false),
                color: "transparent",
                rounded: ""
              }, {
                prepend: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            (openBlock(), createElementBlock(Fragment, null, renderList(wallets, (currency, index) => {
              return createVNode(QCard, {
                key: index,
                flat: "",
                class: normalizeClass(["mb-10 br-20 py-5", `bg-nv-${unref(GetSuffix)("tertiary")}-opacity`])
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, {
                    class: "flex flex-inline",
                    style: { "opacity": "1 !important" }
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(QAvatar, {
                          size: "3.9em",
                          style: normalizeStyle(`background-color: ${unref(Plugin).isActive ? "#717A8A" : "#1d2229"};`)
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_12, toDisplayString(currency.acronym), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"]),
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("h5", {
                            class: normalizeClass(["no-margin text-medium fs-17", {
                              "text-nv-light": unref(Plugin).isActive,
                              "text-nv-dark": !unref(Plugin).isActive
                            }])
                          }, toDisplayString(currency.acronym), 3),
                          createBaseVNode("p", {
                            class: normalizeClass([{
                              "text-nv-light-tertiary": unref(Plugin).isActive,
                              "text-nv-light-secondary": !unref(Plugin).isActive
                            }, "no-margin fs-13 q-mt-xs text-light"])
                          }, toDisplayString(currency.name), 3)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_14, " $ " + toDisplayString(currency.quantity), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["class"]);
            }), 64))
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
var MainBalanceView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "MainBalanceView.vue"]]);
export { MainBalanceView as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkJhbGFuY2VWaWV3LjVkMDNlNzZkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzIiwiLi4vLi4vLi4vc3JjL0JhbGFuY2UvcGFnZXMvTWFpbkJhbGFuY2VWaWV3LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3QgaW5zZXRNYXAgPSB7XG4gIHRydWU6ICdpbnNldCcsXG4gIGl0ZW06ICdpdGVtLWluc2V0JyxcbiAgJ2l0ZW0tdGh1bWJuYWlsJzogJ2l0ZW0tdGh1bWJuYWlsLWluc2V0J1xufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IHtcbiAgeHM6IDIsXG4gIHNtOiA0LFxuICBtZDogOCxcbiAgbGc6IDE2LFxuICB4bDogMjRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTZXBhcmF0b3InLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc3BhY2VkOiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICAgIGluc2V0OiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgc2l6ZTogU3RyaW5nXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/ICd2ZXJ0aWNhbCdcbiAgICAgICAgOiAnaG9yaXpvbnRhbCdcbiAgICApKVxuXG4gICAgY29uc3Qgb3JpZW50Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiBgIHEtc2VwYXJhdG9yLS0keyBvcmllbnRhdGlvbi52YWx1ZSB9YClcblxuICAgIGNvbnN0IGluc2V0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pbnNldCAhPT0gZmFsc2VcbiAgICAgICAgPyBgJHsgb3JpZW50Q2xhc3MudmFsdWUgfS0keyBpbnNldE1hcFsgcHJvcHMuaW5zZXQgXSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2VwYXJhdG9yJHsgb3JpZW50Q2xhc3MudmFsdWUgfSR7IGluc2V0Q2xhc3MudmFsdWUgfWBcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2VwYXJhdG9yLS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cblxuICAgICAgaWYgKHByb3BzLnNpemUgIT09IHZvaWQgMCkge1xuICAgICAgICBhY2NbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnIF0gPSBwcm9wcy5zaXplXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5zcGFjZWQgIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBwcm9wcy5zcGFjZWQgPT09IHRydWVcbiAgICAgICAgICA/IGAkeyBtYXJnaW5zLm1kIH1weGBcbiAgICAgICAgICA6IHByb3BzLnNwYWNlZCBpbiBtYXJnaW5zID8gYCR7IG1hcmdpbnNbIHByb3BzLnNwYWNlZCBdIH1weGAgOiBwcm9wcy5zcGFjZWRcblxuICAgICAgICBjb25zdCBkaXIgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gWyAnTGVmdCcsICdSaWdodCcgXVxuICAgICAgICAgIDogWyAnVG9wJywgJ0JvdHRvbScgXVxuXG4gICAgICAgIGFjY1sgYG1hcmdpbiR7IGRpclsgMCBdIH1gIF0gPSBhY2NbIGBtYXJnaW4keyBkaXJbIDEgXSB9YCBdID0gc2l6ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdocicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZVxuICAgIH0pXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZVxuICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAncS1weS1tZCcgOiBpc01vYmlsZVxuICAgICAgICB9XCJcbiAgICAgICAgY2xhc3M9XCJocC0xMDBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICdtdC00MCBmbGV4IGl0ZW1zLWNlbnRlciBxLXB4LWxnJyA6IGlzTW9iaWxlXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3sgJHQoJ2JhbGFuY2UudG90YWxCYWxhbmNlJykgfX1cbiAgICAgICAgICAgIDxkaXYgIEBjbGljaz1cInVud2F0Y2hcIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb25pZnkgZnMtMjAgcS1tbC1zbSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIDpkYXRhLWljb249XCJ3YXRjaEJhbGFuY2UgPyAnY29kaWNvbjpleWUnIDogJ2NvZGljb246ZXllLWNsb3NlZCdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGg0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1teC1ub25lIHEtbWItbm9uZSB0ZXh0LWxpZ2h0IHdwLTEwMCBxLW10LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtbnYtbGlnaHQnIDogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LW52LWRhcmsnIDogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgd2F0Y2hCYWxhbmNlID8gJyQnLmNvbmNhdChnZXRCYWxhbmNlKSA6ICcqKioqJyB9fVxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxxLXNlcGFyYXRvciBzaXplPVwiMC4zZW1cIiBjb2xvcj1cIm52LXVsdHJhLWRhcmtcIiBjbGFzcz1cIm10LTMwXCIgLz5cblxuICAgICAgICAgPGRpdlxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICdtdC0xMCBxLXB4LWxnJyA6IGlzTW9iaWxlXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTMwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmcy0xNlwiPnt7ICR0KCdiYWxhbmNlLmNhcmRzJykgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVsdHJhLWRlbnNlLWlucHV0LS1kYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cIm9uRm9jdXMgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJvbkZvY3VzID0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnd3AtMzUnIDogIW9uRm9jdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd3AtNTAnIDogb25Gb2N1c1xuICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpwcmVwZW5kPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnkgZnMtMThcIiBkYXRhLWljb249XCJhcmN0aWNvbnM6eGlhb3l1YW4tc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9xLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxxLWNhcmRcbiAgICAgICAgICAgICAgICB2LWZvcj1cIihjYXJkLCBpbmRleCkgaW4gY2FyZHNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMTAgYnItMjAgcHktNVwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiYGJnLW52LSR7R2V0U3VmZml4KCd0ZXJ0aWFyeScpfS1vcGFjaXR5YFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwiZmxleCBmbGV4LWlubGluZVwiIHN0eWxlPVwib3BhY2l0eTogMSAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWlubGluZSB3cC03MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjMuOWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJgYmFja2dyb3VuZC1jb2xvcjogJHtEYXJrLmlzQWN0aXZlID8gJyM3MTdBOEEnIDogJyMxZDIyMjknfTtgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pY29uIHNpemU9XCIxLjVlbVwiIHYtc2hvdz1cImNhcmQudHlwZSA9PT0gJ1ZJU0EnXCIgbmFtZT1cImltZzppY29ucy92aXNhLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtYXZhdGFyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW4gdGV4dC1tZWRpdW0gZnMtMTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1saWdodCcgOiBEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtbnYtZGFyaycgOiAhRGFyay5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjYXJkLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LW52LWxpZ2h0LXRlcnRpYXJ5JyA6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1saWdodC1zZWNvbmRhcnknIDogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luIGZzLTEzIHEtbXQteHMgdGV4dC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjYXJkLnVzZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndwLTMwIGZsZXggaXRlbXMtY2VudGVyIHRleHQtbGlnaHQganVzdGlmeS1lbmQgZnMtMTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICQge3sgY2FyZC5xdWFudGl0eSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8cS1zZXBhcmF0b3Igc2l6ZT1cIjAuM2VtXCIgY29sb3I9XCJudi11bHRyYS1kYXJrXCIgY2xhc3M9XCJtdC0xM1wiIC8+XG5cbiAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnbXQtMTAgcS1weC1sZycgOiBpc01vYmlsZVxuICAgICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi0zMFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnMtMTZcIj57eyAkdCgnYmFsYW5jZS53YWxsZXRzJykgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVsdHJhLWRlbnNlLWlucHV0LS1kYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaDJcIlxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJvbkZvY3VzMiA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICBAYmx1cj1cIm9uRm9jdXMyID0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnd3AtMzUnIDogIW9uRm9jdXMyLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dwLTUwJyA6IG9uRm9jdXMyXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeSBmcy0xOFwiIGRhdGEtaWNvbj1cImFyY3RpY29uczp4aWFveXVhbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3EtaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGN1cnJlbmN5LCBpbmRleCkgaW4gd2FsbGV0c1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0xMCBici0yMCBweS01XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJgYmctbnYtJHtHZXRTdWZmaXgoJ3RlcnRpYXJ5Jyl9LW9wYWNpdHlgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJmbGV4IGZsZXgtaW5saW5lXCIgc3R5bGU9XCJvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtaW5saW5lIHdwLTcwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMy45ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cImBiYWNrZ3JvdW5kLWNvbG9yOiAke0RhcmsuaXNBY3RpdmUgPyAnIzcxN0E4QScgOiAnIzFkMjIyOSd9O2BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnMtMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY3VycmVuY3kuYWNyb255bSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLW1hcmdpbiB0ZXh0LW1lZGl1bSBmcy0xN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LW52LWxpZ2h0JyA6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1kYXJrJyA6ICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGN1cnJlbmN5LmFjcm9ueW0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LW52LWxpZ2h0LXRlcnRpYXJ5JyA6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1saWdodC1zZWNvbmRhcnknIDogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luIGZzLTEzIHEtbXQteHMgdGV4dC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjdXJyZW5jeS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cC0zMCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxpZ2h0IGp1c3RpZnktZW5kIGZzLTE3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAkIHt7IGN1cnJlbmN5LnF1YW50aXR5IH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgU2NyZWVuLCBEYXJrIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IEdldFN1ZmZpeCBmcm9tICcuLi8uLi9hcHAvc2hhcmVkL2hlbHBlcnMvR2V0U3VmZml4JztcblxuY29uc3Qgd2F0Y2hCYWxhbmNlID0gcmVmPGJvb2xlYW4+KHRydWUpO1xuY29uc3Qgc2VhcmNoID0gcmVmPHN0cmluZz4oJycpO1xuY29uc3Qgc2VhcmNoMiA9IHJlZjxzdHJpbmc+KCcnKTtcbmNvbnN0IG9uRm9jdXMgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuY29uc3Qgb25Gb2N1czIgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuXG5jb25zdCBjYXJkcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNaSB0YXJqZXRhJyxcbiAgICAgICAgdXNlcjogJ1VzZXIgY3J5cHRvJyxcbiAgICAgICAgdHlwZTogJ1ZJU0EnLFxuICAgICAgICBxdWFudGl0eTogJzQuNTY1LDAwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWkgdGFyamV0YSAyJyxcbiAgICAgICAgdXNlcjogJ1VzZXIgY3J5cHRvJyxcbiAgICAgICAgdHlwZTogJ1ZJU0EnLFxuICAgICAgICBxdWFudGl0eTogJzEuNTY1LDAwJ1xuICAgIH1cbl07XG5cbmNvbnN0IHdhbGxldHMgPSBbXG4gICAge1xuICAgICAgICBhY3JvbnltOiAnQlRDJyxcbiAgICAgICAgbmFtZTogJ0JpdGNvaW4nLFxuICAgICAgICBxdWFudGl0eTogJzAsMDAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFjcm9ueW06ICdVU0RUJyxcbiAgICAgICAgbmFtZTogJ1RldGhlciBVU0RUJyxcbiAgICAgICAgcXVhbnRpdHk6ICcxLDAwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBhY3JvbnltOiAnRVRIJyxcbiAgICAgICAgbmFtZTogJ0V0aGVyZXVtJyxcbiAgICAgICAgcXVhbnRpdHk6ICczLjM0LDAwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBhY3JvbnltOiAnQlRDJyxcbiAgICAgICAgbmFtZTogJ0JpdGNvaW4nLFxuICAgICAgICBxdWFudGl0eTogJzQuNTY1LDAwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBhY3JvbnltOiAnQlRDJyxcbiAgICAgICAgbmFtZTogJ0JpdGNvaW4nLFxuICAgICAgICBxdWFudGl0eTogJzQuNTY1LDAwJ1xuICAgIH1cbl07XG5cbmNvbnN0IGlzTW9iaWxlID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0Lm1kKTtcbmNvbnN0IGdldEJhbGFuY2UgPSBjb21wdXRlZCgoKSA9PiAnODAuNjAnKTtcblxuY29uc3QgdW53YXRjaCA9ICgpID0+XG57XG4gICAgd2F0Y2hCYWxhbmNlLnZhbHVlID0gIXdhdGNoQmFsYW5jZS52YWx1ZTtcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQSxNQUFNLFdBQVc7QUFBQSxFQUNmLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLGtCQUFrQjtBQUNwQjtBQUVPLE1BQU0s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
