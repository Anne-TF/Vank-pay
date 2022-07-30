import { a6 as createDirective, a2 as client, I as noop, aq as leftClick, ar as addEvt, as as preventDraggable, av as position, V as stopAndPrevent, aw as cleanEvt, y as ref, a as computed, B as watch, s as getCurrentInstance, K as nextTick, l as h, T as Transition, aH as getNormalizedVNodes, m as hSlot, aI as KeepAlive, k as createComponent, M as useDarkProps, O as useDark, aJ as hDir, _ as _export_sfc, d as defineComponent, ab as useI18n, A as reactive, a9 as useAuthStore, aa as storeToRefs, e as createBlock, w as withCtx, n as normalizeClass, u as unref, a7 as useQuasar, a8 as useRouter, S as Screen, o as openBlock, h as createBaseVNode, f as createVNode, ai as QBtn, P as Plugin, ae as toDisplayString, ad as createTextVNode } from "./index.f0dfeb9e.js";
import { g as getModifierDirections, s as shouldStart, c as clearSelection } from "./selection.f44b76f5.js";
import { Q as QPage } from "./QPage.8c463601.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
import { E as EncodeText, C as CodeInput } from "./EncodeText.99f002d7.js";
import { useQoriPayRepository } from "./axios.07c0a896.js";
import "./QInput.71830f22.js";
import "./format.801e7424.js";
function parseArg(arg) {
  const data = [0.06, 6, 50];
  if (typeof arg === "string" && arg.length) {
    arg.split(":").forEach((val, index) => {
      const v = parseFloat(val);
      v && (data[index] = v);
    });
  }
  return data;
}
var TouchSwipe = createDirective(
  {
    name: "touch-swipe",
    beforeMount(el, { value, arg, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      const mouseCapture = modifiers.mouseCapture === true ? "Capture" : "";
      const ctx = {
        handler: value,
        sensitivity: parseArg(arg),
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", `notPassive${mouseCapture}`],
              [document, "mouseup", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "notPassiveCapture"],
              [target, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          const pos = position(evt);
          ctx.event = {
            x: pos.left,
            y: pos.top,
            time: Date.now(),
            mouse: mouseEvent === true,
            dir: false
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            return;
          }
          const time = Date.now() - ctx.event.time;
          if (time === 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, absX = Math.abs(distX), distY = pos.top - ctx.event.y, absY = Math.abs(distY);
          if (ctx.event.mouse !== true) {
            if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
              ctx.end(evt);
              return;
            }
          } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
            return;
          }
          const velX = absX / time, velY = absY / time;
          if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = distY < 0 ? "up" : "down";
          }
          if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = distX < 0 ? "left" : "right";
          }
          if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "up";
          }
          if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "down";
          }
          if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "left";
          }
          if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "right";
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            if (ctx.event.mouse === true) {
              document.body.classList.add("no-pointer-events--children");
              document.body.classList.add("non-selectable");
              clearSelection();
              ctx.styleCleanup = (withDelay) => {
                ctx.styleCleanup = void 0;
                document.body.classList.remove("non-selectable");
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelay === true) {
                  setTimeout(remove, 50);
                } else {
                  remove();
                }
              };
            }
            ctx.handler({
              evt,
              touch: ctx.event.mouse !== true,
              mouse: ctx.event.mouse,
              direction: ctx.event.dir,
              duration: time,
              distance: {
                x: absX,
                y: absY
              }
            });
          } else {
            ctx.end(evt);
          }
        },
        end(evt) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(true);
          evt !== void 0 && ctx.event.dir !== false && stopAndPrevent(evt);
          ctx.event = void 0;
        }
      };
      el.__qtouchswipe = ctx;
      modifiers.mouse === true && addEvt(ctx, "main", [
        [el, "mousedown", "mouseStart", `passive${mouseCapture}`]
      ]);
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof bindings.value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchswipe;
      }
    }
  }
);
function useCache() {
  const cache = /* @__PURE__ */ new Map();
  return {
    getCache: function(key, obj) {
      return cache[key] === void 0 ? cache[key] = obj : cache[key];
    },
    getCacheWithFn: function(key, fn) {
      return cache[key] === void 0 ? cache[key] = fn() : cache[key];
    }
  };
}
const usePanelChildProps = {
  name: { required: true },
  disable: Boolean
};
const PanelWrapper = {
  setup(_, { slots }) {
    return () => h("div", {
      class: "q-panel scroll",
      role: "tabpanel"
    }, hSlot(slots.default));
  }
};
const usePanelProps = {
  modelValue: {
    required: true
  },
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,
  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [String, Number],
    default: 300
  },
  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number
};
const usePanelEmits = ["update:modelValue", "before-transition", "transition"];
function usePanel() {
  const { props, emit, proxy } = getCurrentInstance();
  const { getCacheWithFn } = useCache();
  let panels, forcedPanelTransition;
  const panelIndex = ref(null);
  const panelTransition = ref(null);
  function onSwipe(evt) {
    const dir = props.vertical === true ? "up" : "left";
    goToPanelByOffset((proxy.$q.lang.rtl === true ? -1 : 1) * (evt.direction === dir ? 1 : -1));
  }
  const panelDirectives = computed(() => {
    return [[
      TouchSwipe,
      onSwipe,
      void 0,
      {
        horizontal: props.vertical !== true,
        vertical: props.vertical,
        mouse: true
      }
    ]];
  });
  const transitionPrev = computed(
    () => props.transitionPrev || `slide-${props.vertical === true ? "down" : "right"}`
  );
  const transitionNext = computed(
    () => props.transitionNext || `slide-${props.vertical === true ? "up" : "left"}`
  );
  const transitionStyle = computed(
    () => `--q-transition-duration: ${props.transitionDuration}ms`
  );
  const contentKey = computed(() => typeof props.modelValue === "string" || typeof props.modelValue === "number" ? props.modelValue : String(props.modelValue));
  const keepAliveProps = computed(() => ({
    include: props.keepAliveInclude,
    exclude: props.keepAliveExclude,
    max: props.keepAliveMax
  }));
  const needsUniqueKeepAliveWrapper = computed(
    () => props.keepAliveInclude !== void 0 || props.keepAliveExclude !== void 0
  );
  watch(() => props.modelValue, (newVal, oldVal) => {
    const index = isValidPanelName(newVal) === true ? getPanelIndex(newVal) : -1;
    if (forcedPanelTransition !== true) {
      updatePanelTransition(
        index === -1 ? 0 : index < getPanelIndex(oldVal) ? -1 : 1
      );
    }
    if (panelIndex.value !== index) {
      panelIndex.value = index;
      emit("before-transition", newVal, oldVal);
      nextTick(() => {
        emit("transition", newVal, oldVal);
      });
    }
  });
  function nextPanel() {
    goToPanelByOffset(1);
  }
  function previousPanel() {
    goToPanelByOffset(-1);
  }
  Object.assign(proxy, {
    next: nextPanel,
    previous: previousPanel,
    goTo: goToPanel
  });
  function goToPanel(name) {
    emit("update:modelValue", name);
  }
  function isValidPanelName(name) {
    return name !== void 0 && name !== null && name !== "";
  }
  function getPanelIndex(name) {
    return panels.findIndex((panel) => {
      return panel.props.name === name && panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function getEnabledPanels() {
    return panels.filter((panel) => {
      return panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function updatePanelTransition(direction) {
    const val = direction !== 0 && props.animated === true && panelIndex.value !== -1 ? "q-transition--" + (direction === -1 ? transitionPrev.value : transitionNext.value) : null;
    if (panelTransition.value !== val) {
      panelTransition.value = val;
    }
  }
  function goToPanelByOffset(direction, startIndex = panelIndex.value) {
    let index = startIndex + direction;
    while (index > -1 && index < panels.length) {
      const opt = panels[index];
      if (opt !== void 0 && opt.props.disable !== "" && opt.props.disable !== true) {
        updatePanelTransition(direction);
        forcedPanelTransition = true;
        emit("update:modelValue", opt.props.name);
        setTimeout(() => {
          forcedPanelTransition = false;
        });
        return;
      }
      index += direction;
    }
    if (props.infinite === true && panels.length > 0 && startIndex !== -1 && startIndex !== panels.length) {
      goToPanelByOffset(direction, direction === -1 ? panels.length : -1);
    }
  }
  function updatePanelIndex() {
    const index = getPanelIndex(props.modelValue);
    if (panelIndex.value !== index) {
      panelIndex.value = index;
    }
    return true;
  }
  function getPanelContentChild() {
    const panel = isValidPanelName(props.modelValue) === true && updatePanelIndex() && panels[panelIndex.value];
    return props.keepAlive === true ? [
      h(KeepAlive, keepAliveProps.value, [
        h(
          needsUniqueKeepAliveWrapper.value === true ? getCacheWithFn(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
          { key: contentKey.value, style: transitionStyle.value },
          () => panel
        )
      ])
    ] : [
      h("div", {
        class: "q-panel scroll",
        style: transitionStyle.value,
        key: contentKey.value,
        role: "tabpanel"
      }, [panel])
    ];
  }
  function getPanelContent() {
    if (panels.length === 0) {
      return;
    }
    return props.animated === true ? [h(Transition, { name: panelTransition.value }, getPanelContentChild)] : getPanelContentChild();
  }
  function updatePanelsList(slots) {
    panels = getNormalizedVNodes(
      hSlot(slots.default, [])
    ).filter(
      (panel) => panel.props !== null && panel.props.slot === void 0 && isValidPanelName(panel.props.name) === true
    );
    return panels.length;
  }
  function getPanels() {
    return panels;
  }
  return {
    panelIndex,
    panelDirectives,
    updatePanelsList,
    updatePanelIndex,
    getPanelContent,
    getEnabledPanels,
    getPanels,
    isValidPanelName,
    keepAliveProps,
    needsUniqueKeepAliveWrapper,
    goToPanelByOffset,
    goToPanel,
    nextPanel,
    previousPanel
  };
}
var QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel" }, hSlot(slots.default));
  }
});
var QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TwoFactorAuthentication",
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const $q = useQuasar();
    const $router = useRouter();
    ref(false);
    const { t, locale } = useI18n({ useScope: "global" });
    const codeEmail = reactive({
      mailCode: null,
      mailHash: null
    });
    const codePhone = reactive({
      smsCode: null,
      smsHash: null
    });
    const loading = ref(false);
    const codeAuthy = ref(null);
    const tab = ref("email");
    const authStore = useAuthStore();
    const { loginForm } = storeToRefs(authStore);
    const isMobile = computed(() => Screen.lt.md);
    const getActiveMethod = computed(() => {
      return authStore.Active2FA;
    });
    const isXS = computed(() => Screen.lt.sm);
    const getEncode = computed(() => {
      return tab.value === "email" ? authStore.Email : `+${authStore.Phone}`;
    });
    const setCodeEmail = (value) => {
      codeEmail.mailCode = value;
    };
    const sendCode = async (modulo, fn) => {
      const { data } = await useQoriPayRepository.sendCode({
        Modulo: modulo,
        User: loginForm.value.mode === "email" ? loginForm.value.emailOrPhone : `${loginForm.value.code}${loginForm.value.emailOrPhone}`.replaceAll("+", ""),
        Password: loginForm.value.password
      });
      if (data.error) {
        $q.notify({
          position: isMobile.value ? "bottom" : "top-right",
          message: `Ups... ${t(data.errorKey)}`,
          color: "red",
          icon: "warning"
        });
        return;
      } else {
        fn(data);
      }
    };
    const setCodePhone = (value) => {
      codePhone.smsCode = value;
    };
    const setCodeAuthy = (value) => {
      codeAuthy.value = value;
    };
    const changeView = (view) => {
      if (view === "phone" && getActiveMethod.value.telefono || view === "email" && getActiveMethod.value.correo || view === "authy" && getActiveMethod.value.authy) {
        tab.value = view;
        $router.replace({
          path: "/two-factor-auth",
          query: {
            type: tab.value
          }
        });
      }
    };
    const handleValidation = async () => {
      loading.value = true;
      const twoFAValidation = {};
      if (tab.value === "email") {
        Object.assign(twoFAValidation, codeEmail);
      }
      if (tab.value === "phone") {
        Object.assign(twoFAValidation, codePhone);
      }
      if (tab.value === "authy") {
        Object.assign(twoFAValidation, { "2FAToken": codeAuthy.value });
      }
      const { data } = await useQoriPayRepository.login({
        Modulo: "validarCliente",
        User: loginForm.value.mode === "email" ? loginForm.value.emailOrPhone : `${loginForm.value.code}${loginForm.value.emailOrPhone}`.replaceAll("+", ""),
        Password: loginForm.value.password,
        ...twoFAValidation
      });
      loading.value = false;
      if (Boolean(data.error)) {
        $q.notify({
          position: isMobile.value ? "bottom" : "top-right",
          message: `Ups... ${t(data == null ? void 0 : data.errorKey)}`,
          color: "red",
          icon: "warning"
        });
        return;
      } else {
        authStore.setToken(data.token);
        authStore.setUserName(data.username);
        authStore.setPreAuth(false);
        authStore.clearLoginForm();
        authStore.clearSignUpForm();
        await $router.push("/");
      }
    };
    if ($router.currentRoute.value.query) {
      const find = Object.keys(getActiveMethod.value).filter((e) => {
        return getActiveMethod.value[e];
      });
      if (find) {
        const aux = find.toString() === "correo" ? "email" : find.toString() === "telefono" ? "phone" : "authy";
        changeView((_d = (_c = (_b = (_a = $router.currentRoute.value) == null ? void 0 : _a.query) == null ? void 0 : _b.type) == null ? void 0 : _c.toString()) != null ? _d : aux);
      } else {
        changeView((_h = (_g = (_f = (_e = $router.currentRoute.value) == null ? void 0 : _e.query) == null ? void 0 : _f.type) == null ? void 0 : _g.toString()) != null ? _h : "email");
      }
    }
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
                onClick: _cache[0] || (_cache[0] = ($event) => unref($router).push("/login")),
                icon: "cancel",
                class: "q-px-none"
              })
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([{
                "flex wp-100 justify-center": unref(Screen).sm
              }, "q-px-md q-pt-lg"])
            }, [
              createBaseVNode("h5", {
                class: normalizeClass([{
                  "fs-23": unref(isXS),
                  "text-white": unref(Plugin).isActive,
                  "text-left": !unref(isMobile) || unref(Screen).gt.sm || unref(Screen).xs,
                  "wp-60": unref(Screen).sm
                }, "no-padding q-mb-xs q-mt-sm"])
              }, toDisplayString(_ctx.$t("codeValidation.twoFAValidation")), 3),
              createBaseVNode("div", {
                class: normalizeClass([{
                  "wp-60": unref(Screen).sm,
                  "justify-start": unref(Screen).gt.sm || unref(Screen).xs
                }, "flex flex-inline mt-35"])
              }, [
                createBaseVNode("div", {
                  class: normalizeClass([`
                            ${tab.value === "email" ? `bg-nv-${unref(GetSuffix)("secondary")}
                            ${!unref(Plugin).isActive ? "text-nv-light-accent" : "text-white"}` : `text-nv-${unref(GetSuffix)(
                    `${!unref(Plugin).isActive ? "tertiary" : "secondary"}`
                  )}`}
                        `, "flex items-center justify-center py-10 px-17 br-30 fs-12 ls-2 q-mr-sm cursor-pointer"]),
                  onClick: _cache[1] || (_cache[1] = ($event) => changeView("email"))
                }, toDisplayString(_ctx.$t("fields.email")), 3),
                createBaseVNode("div", {
                  class: normalizeClass([`
                            ${tab.value === "phone" ? `bg-nv-${unref(GetSuffix)("secondary")}
                            ${!unref(Plugin).isActive ? "text-nv-light-accent" : "text-white"}` : `text-nv-${unref(GetSuffix)(
                    `${!unref(Plugin).isActive ? "tertiary" : "secondary"}`
                  )}`}
                        `, "flex items-center justify-center px-17 py-10 br-30 fs-12 ls-2 cursor-pointer q-mx-xs"]),
                  onClick: _cache[2] || (_cache[2] = ($event) => changeView("phone"))
                }, toDisplayString(_ctx.$t("fields.phoneNumber")), 3),
                createBaseVNode("div", {
                  class: normalizeClass([`
                            ${tab.value === "authy" ? `bg-nv-${unref(GetSuffix)("secondary")}
                            ${!unref(Plugin).isActive ? "text-nv-light-accent" : "text-white"}` : `text-nv-${unref(GetSuffix)(
                    `${!unref(Plugin).isActive ? "tertiary" : "secondary"}`
                  )}`}
                        `, "flex items-center justify-center px-17 py-10 br-30 fs-12 ls-2 cursor-pointer"]),
                  onClick: _cache[3] || (_cache[3] = ($event) => changeView("authy"))
                }, " Authy ", 2)
              ], 2),
              createVNode(QTabPanels, {
                class: normalizeClass(`bg-nv-${unref(Plugin).isActive ? "dark" : "light"} text-nv-light-tertiary ${unref(Screen).sm ? "wp-60" : "wp-100"}`),
                modelValue: tab.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => tab.value = $event),
                animated: ""
              }, {
                default: withCtx(() => [
                  createVNode(QTabPanel, {
                    class: "no-margin no-padding no-scroll",
                    name: "email"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("p", {
                        class: normalizeClass([{
                          "fs-14": unref(isMobile),
                          "fs-16": !unref(isMobile)
                        }, "mt-30 mb-40"])
                      }, [
                        createTextVNode(toDisplayString(_ctx.$t("codeValidation.sendTo")) + " ", 1),
                        createBaseVNode("span", {
                          class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                        }, toDisplayString(unref(EncodeText)(unref(getEncode), tab.value)), 3)
                      ], 2),
                      createVNode(CodeInput, {
                        code: codeEmail.mailCode,
                        disable: loading.value,
                        mode: "counter2FAEmail",
                        class: "wp-100",
                        onAddCode: setCodeEmail,
                        onRemoveCode: setCodeEmail,
                        onSendCode: _cache[4] || (_cache[4] = ($event) => sendCode("EnviarMail", (data) => codeEmail.mailHash = data.hash))
                      }, null, 8, ["code", "disable"])
                    ]),
                    _: 1
                  }),
                  createVNode(QTabPanel, {
                    class: "no-margin no-padding no-scroll",
                    name: "phone"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("p", {
                        class: normalizeClass([{
                          "fs-14": unref(isMobile),
                          "fs-16": !unref(isMobile)
                        }, "mt-30 mb-40"])
                      }, [
                        createTextVNode(toDisplayString(_ctx.$t("codeValidation.sendTo")) + " ", 1),
                        createBaseVNode("span", {
                          class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                        }, toDisplayString(unref(EncodeText)(unref(getEncode), tab.value)), 3)
                      ], 2),
                      createVNode(CodeInput, {
                        class: "wp-100",
                        disable: loading.value,
                        code: codePhone.smsCode,
                        mode: "counter2FAPhone",
                        onAddCode: setCodePhone,
                        onRemoveCode: setCodePhone,
                        onSendCode: _cache[5] || (_cache[5] = ($event) => sendCode("EnviarSms", (data) => codePhone.smsHash = data.hash))
                      }, null, 8, ["disable", "code"])
                    ]),
                    _: 1
                  }),
                  createVNode(QTabPanel, {
                    class: "no-margin no-padding no-scroll",
                    name: "authy"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("p", {
                        class: normalizeClass([{
                          "fs-14": unref(isMobile),
                          "fs-16": !unref(isMobile)
                        }, "mt-30 mb-40"])
                      }, [
                        createTextVNode(toDisplayString(_ctx.$t("codeValidation.enter")) + " ", 1),
                        createBaseVNode("span", {
                          class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} q-mx-xs`)
                        }, " Authy ", 2),
                        createTextVNode(" " + toDisplayString(_ctx.$t("codeValidation.toObtain")), 1)
                      ], 2),
                      createVNode(CodeInput, {
                        disable: loading.value,
                        class: "wp-100",
                        code: codeAuthy.value,
                        "show-send-code": false,
                        onAddCode: setCodeAuthy,
                        onRemoveCode: setCodeAuthy
                      }, null, 8, ["disable", "code"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class", "modelValue"]),
              createVNode(QBtn, {
                color: `nv-${unref(GetSuffix)("primary")}`,
                class: "full-width br-20 py-12 mt-40 fs-16",
                unelevated: "",
                "no-caps": "",
                onClick: handleValidation,
                loading: loading.value
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("buttons.continue")), 1)
                ]),
                _: 1
              }, 8, ["color", "loading"])
            ], 2)
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
var TwoFactorAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "TwoFactorAuthentication.vue"]]);
export { TwoFactorAuthentication as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHdvRmFjdG9yQXV0aGVudGljYXRpb24uMjczNGI0ODIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hTd2lwZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhY2hlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcGFuZWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYi1wYW5lbHMvUVRhYlBhbmVsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWItcGFuZWxzL1FUYWJQYW5lbHMuanMiLCIuLi8uLi8uLi9zcmMvQXV0aC9wYWdlcy9Ud29GYWN0b3JBdXRoZW50aWNhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRNb2RpZmllckRpcmVjdGlvbnMsIHNob3VsZFN0YXJ0IH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS90b3VjaC5qcydcbmltcG9ydCB7IGFkZEV2dCwgY2xlYW5FdnQsIHBvc2l0aW9uLCBsZWZ0Q2xpY2ssIHN0b3BBbmRQcmV2ZW50LCBwcmV2ZW50RHJhZ2dhYmxlLCBub29wIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBjbGVhclNlbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IGdldFNTUlByb3BzIGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuZnVuY3Rpb24gcGFyc2VBcmcgKGFyZykge1xuICAvLyBkZWx0YSAobWluIHZlbG9jaXR5IC0tIGRpc3QgLyB0aW1lKVxuICAvLyBtb2JpbGUgbWluIGRpc3RhbmNlIG9uIGZpcnN0IG1vdmVcbiAgLy8gZGVza3RvcCBtaW4gZGlzdGFuY2UgdW50aWwgZGVjaWRpbmcgaWYgaXQncyBhIHN3aXBlIG9yIG5vdFxuICBjb25zdCBkYXRhID0gWyAwLjA2LCA2LCA1MCBdXG5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGFyZy5sZW5ndGgpIHtcbiAgICBhcmcuc3BsaXQoJzonKS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdCh2YWwpXG4gICAgICB2ICYmIChkYXRhWyBpbmRleCBdID0gdilcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ3RvdWNoLXN3aXBlJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICd0b3VjaC1zd2lwZScsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgeyB2YWx1ZSwgYXJnLCBtb2RpZmllcnMgfSkge1xuICAgICAgICAvLyBlYXJseSByZXR1cm4sIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcbiAgICAgICAgaWYgKG1vZGlmaWVycy5tb3VzZSAhPT0gdHJ1ZSAmJiBjbGllbnQuaGFzLnRvdWNoICE9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb3VzZUNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJydcblxuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgaGFuZGxlcjogdmFsdWUsXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6IHBhcnNlQXJnKGFyZyksXG4gICAgICAgICAgZGlyZWN0aW9uOiBnZXRNb2RpZmllckRpcmVjdGlvbnMobW9kaWZpZXJzKSxcblxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkgJiYgbGVmdENsaWNrKGV2dCkpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgYG5vdFBhc3NpdmUkeyBtb3VzZUNhcHR1cmUgfWAgXSxcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2V1cCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaG1vdmUnLCAnbW92ZScsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoZW5kJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzdGFydCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCB0cnVlKVxuXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbihldnQpXG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHtcbiAgICAgICAgICAgICAgeDogcG9zLmxlZnQsXG4gICAgICAgICAgICAgIHk6IHBvcy50b3AsXG4gICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgIG1vdXNlOiBtb3VzZUV2ZW50ID09PSB0cnVlLFxuICAgICAgICAgICAgICBkaXI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1vdmUgKGV2dCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50LmRpciAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGltZSA9IERhdGUubm93KCkgLSBjdHguZXZlbnQudGltZVxuXG4gICAgICAgICAgICBpZiAodGltZSA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgICAgICAgICAgZGlzdFggPSBwb3MubGVmdCAtIGN0eC5ldmVudC54LFxuICAgICAgICAgICAgICBhYnNYID0gTWF0aC5hYnMoZGlzdFgpLFxuICAgICAgICAgICAgICBkaXN0WSA9IHBvcy50b3AgLSBjdHguZXZlbnQueSxcbiAgICAgICAgICAgICAgYWJzWSA9IE1hdGguYWJzKGRpc3RZKVxuXG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50Lm1vdXNlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChhYnNYIDwgY3R4LnNlbnNpdGl2aXR5WyAxIF0gJiYgYWJzWSA8IGN0eC5zZW5zaXRpdml0eVsgMSBdKSB7XG4gICAgICAgICAgICAgICAgY3R4LmVuZChldnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFic1ggPCBjdHguc2Vuc2l0aXZpdHlbIDIgXSAmJiBhYnNZIDwgY3R4LnNlbnNpdGl2aXR5WyAyIF0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHZlbFggPSBhYnNYIC8gdGltZSxcbiAgICAgICAgICAgICAgdmVsWSA9IGFic1kgLyB0aW1lXG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgYWJzWVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFkgPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSBkaXN0WSA8IDAgPyAndXAnIDogJ2Rvd24nXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5ob3Jpem9udGFsID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPiBhYnNZXG4gICAgICAgICAgICAgICYmIGFic1kgPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWCA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9IGRpc3RYIDwgMCA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLnVwID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPCBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RZIDwgMFxuICAgICAgICAgICAgICAmJiBhYnNYIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFkgPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAndXAnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5kb3duID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPCBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RZID4gMFxuICAgICAgICAgICAgICAmJiBhYnNYIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFkgPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAnZG93bidcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmxlZnQgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA+IGFic1lcbiAgICAgICAgICAgICAgJiYgZGlzdFggPCAwXG4gICAgICAgICAgICAgICYmIGFic1kgPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWCA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9ICdsZWZ0J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24ucmlnaHQgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA+IGFic1lcbiAgICAgICAgICAgICAgJiYgZGlzdFggPiAwXG4gICAgICAgICAgICAgICYmIGFic1kgPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWCA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9ICdyaWdodCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kaXIgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgICAgICAgICBpZiAoY3R4LmV2ZW50Lm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcblxuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXkgPT4ge1xuICAgICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHZvaWQgMFxuXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXBvaW50ZXItZXZlbnRzLS1jaGlsZHJlbicpXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmICh3aXRoRGVsYXkgPT09IHRydWUpIHsgc2V0VGltZW91dChyZW1vdmUsIDUwKSB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHsgcmVtb3ZlKCkgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGN0eC5oYW5kbGVyKHtcbiAgICAgICAgICAgICAgICBldnQsXG4gICAgICAgICAgICAgICAgdG91Y2g6IGN0eC5ldmVudC5tb3VzZSAhPT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb3VzZTogY3R4LmV2ZW50Lm1vdXNlLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogY3R4LmV2ZW50LmRpcixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGltZSxcbiAgICAgICAgICAgICAgICBkaXN0YW5jZToge1xuICAgICAgICAgICAgICAgICAgeDogYWJzWCxcbiAgICAgICAgICAgICAgICAgIHk6IGFic1lcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY3R4LmVuZChldnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVuZCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDAgJiYgY3R4LnN0eWxlQ2xlYW51cCh0cnVlKVxuICAgICAgICAgICAgZXZ0ICE9PSB2b2lkIDAgJiYgY3R4LmV2ZW50LmRpciAhPT0gZmFsc2UgJiYgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB2b2lkIDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3F0b3VjaHN3aXBlID0gY3R4XG5cbiAgICAgICAgbW9kaWZpZXJzLm1vdXNlID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgbW91c2VDYXB0dXJlIH1gIF1cbiAgICAgICAgXSlcblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2htb3ZlJywgJ25vb3AnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgXSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCBiaW5kaW5ncykge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHN3aXBlXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKGJpbmRpbmdzLm9sZFZhbHVlICE9PSBiaW5kaW5ncy52YWx1ZSkge1xuICAgICAgICAgICAgdHlwZW9mIGJpbmRpbmdzLnZhbHVlICE9PSAnZnVuY3Rpb24nICYmIGN0eC5lbmQoKVxuICAgICAgICAgICAgY3R4LmhhbmRsZXIgPSBiaW5kaW5ncy52YWx1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGN0eC5kaXJlY3Rpb24gPSBnZXRNb2RpZmllckRpcmVjdGlvbnMoYmluZGluZ3MubW9kaWZpZXJzKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVVbm1vdW50IChlbCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHN3aXBlXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcbiAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDAgJiYgY3R4LnN0eWxlQ2xlYW51cCgpXG5cbiAgICAgICAgICBkZWxldGUgZWwuX19xdG91Y2hzd2lwZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Q2FjaGU6IF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICAgICAgPyBmdW5jdGlvbiAoXywgb2JqKSB7IHJldHVybiBvYmogfVxuICAgICAgOiBmdW5jdGlvbiAoa2V5LCBvYmopIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlWyBrZXkgXSA9PT0gdm9pZCAwXG4gICAgICAgICAgPyAoY2FjaGVbIGtleSBdID0gb2JqKVxuICAgICAgICAgIDogY2FjaGVbIGtleSBdXG4gICAgICB9LFxuXG4gICAgZ2V0Q2FjaGVXaXRoRm46IF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICAgICAgPyBmdW5jdGlvbiAoXywgZm4pIHsgcmV0dXJuIGZuKCkgfVxuICAgICAgOiBmdW5jdGlvbiAoa2V5LCBmbikge1xuICAgICAgICByZXR1cm4gY2FjaGVbIGtleSBdID09PSB2b2lkIDBcbiAgICAgICAgICA/IChjYWNoZVsga2V5IF0gPSBmbigpKVxuICAgICAgICAgIDogY2FjaGVbIGtleSBdXG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlLCBUcmFuc2l0aW9uLCBLZWVwQWxpdmUgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFN3aXBlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvVG91Y2hTd2lwZS5qcydcblxuaW1wb3J0IHVzZUNhY2hlIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhY2hlLmpzJ1xuXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZFZOb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbENoaWxkUHJvcHMgPSB7XG4gIG5hbWU6IHsgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZGlzYWJsZTogQm9vbGVhblxufVxuXG5jb25zdCBQYW5lbFdyYXBwZXIgPSB7XG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6ICdxLXBhbmVsIHNjcm9sbCcsXG4gICAgICByb2xlOiAndGFicGFuZWwnXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBhbmVsUHJvcHMgPSB7XG4gIG1vZGVsVmFsdWU6IHtcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuXG4gIGFuaW1hdGVkOiBCb29sZWFuLFxuICBpbmZpbml0ZTogQm9vbGVhbixcbiAgc3dpcGVhYmxlOiBCb29sZWFuLFxuICB2ZXJ0aWNhbDogQm9vbGVhbixcblxuICB0cmFuc2l0aW9uUHJldjogU3RyaW5nLFxuICB0cmFuc2l0aW9uTmV4dDogU3RyaW5nLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IHtcbiAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgZGVmYXVsdDogMzAwXG4gIH0sXG5cbiAga2VlcEFsaXZlOiBCb29sZWFuLFxuICBrZWVwQWxpdmVJbmNsdWRlOiBbIFN0cmluZywgQXJyYXksIFJlZ0V4cCBdLFxuICBrZWVwQWxpdmVFeGNsdWRlOiBbIFN0cmluZywgQXJyYXksIFJlZ0V4cCBdLFxuICBrZWVwQWxpdmVNYXg6IE51bWJlclxufVxuXG5leHBvcnQgY29uc3QgdXNlUGFuZWxFbWl0cyA9IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2JlZm9yZS10cmFuc2l0aW9uJywgJ3RyYW5zaXRpb24nIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBnZXRDYWNoZVdpdGhGbiB9ID0gdXNlQ2FjaGUoKVxuXG4gIGxldCBwYW5lbHMsIGZvcmNlZFBhbmVsVHJhbnNpdGlvblxuXG4gIGNvbnN0IHBhbmVsSW5kZXggPSByZWYobnVsbClcbiAgY29uc3QgcGFuZWxUcmFuc2l0aW9uID0gcmVmKG51bGwpXG5cbiAgZnVuY3Rpb24gb25Td2lwZSAoZXZ0KSB7XG4gICAgY29uc3QgZGlyID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndXAnIDogJ2xlZnQnXG4gICAgZ29Ub1BhbmVsQnlPZmZzZXQoKHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSAqIChldnQuZGlyZWN0aW9uID09PSBkaXIgPyAxIDogLTEpKVxuICB9XG5cbiAgY29uc3QgcGFuZWxEaXJlY3RpdmVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIC8vIGlmIHByb3BzLnN3aXBlYWJsZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoU3dpcGUsXG4gICAgICBvblN3aXBlLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBob3Jpem9udGFsOiBwcm9wcy52ZXJ0aWNhbCAhPT0gdHJ1ZSxcbiAgICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxuICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGNvbnN0IHRyYW5zaXRpb25QcmV2ID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy50cmFuc2l0aW9uUHJldiB8fCBgc2xpZGUtJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnZG93bicgOiAncmlnaHQnIH1gXG4gIClcblxuICBjb25zdCB0cmFuc2l0aW9uTmV4dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMudHJhbnNpdGlvbk5leHQgfHwgYHNsaWRlLSR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyB9YFxuICApXG5cbiAgY29uc3QgdHJhbnNpdGlvblN0eWxlID0gY29tcHV0ZWQoXG4gICAgKCkgPT4gYC0tcS10cmFuc2l0aW9uLWR1cmF0aW9uOiAkeyBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfW1zYFxuICApXG5cbiAgY29uc3QgY29udGVudEtleSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICB0eXBlb2YgcHJvcHMubW9kZWxWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHByb3BzLm1vZGVsVmFsdWUgPT09ICdudW1iZXInXG4gICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIDogU3RyaW5nKHByb3BzLm1vZGVsVmFsdWUpXG4gICkpXG5cbiAgY29uc3Qga2VlcEFsaXZlUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIGluY2x1ZGU6IHByb3BzLmtlZXBBbGl2ZUluY2x1ZGUsXG4gICAgZXhjbHVkZTogcHJvcHMua2VlcEFsaXZlRXhjbHVkZSxcbiAgICBtYXg6IHByb3BzLmtlZXBBbGl2ZU1heFxuICB9KSlcblxuICBjb25zdCBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLmtlZXBBbGl2ZUluY2x1ZGUgIT09IHZvaWQgMFxuICAgIHx8IHByb3BzLmtlZXBBbGl2ZUV4Y2x1ZGUgIT09IHZvaWQgMFxuICApXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBpc1ZhbGlkUGFuZWxOYW1lKG5ld1ZhbCkgPT09IHRydWVcbiAgICAgID8gZ2V0UGFuZWxJbmRleChuZXdWYWwpXG4gICAgICA6IC0xXG5cbiAgICBpZiAoZm9yY2VkUGFuZWxUcmFuc2l0aW9uICE9PSB0cnVlKSB7XG4gICAgICB1cGRhdGVQYW5lbFRyYW5zaXRpb24oXG4gICAgICAgIGluZGV4ID09PSAtMSA/IDAgOiAoaW5kZXggPCBnZXRQYW5lbEluZGV4KG9sZFZhbCkgPyAtMSA6IDEpXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHBhbmVsSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICBwYW5lbEluZGV4LnZhbHVlID0gaW5kZXhcbiAgICAgIGVtaXQoJ2JlZm9yZS10cmFuc2l0aW9uJywgbmV3VmFsLCBvbGRWYWwpXG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGVtaXQoJ3RyYW5zaXRpb24nLCBuZXdWYWwsIG9sZFZhbClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIG5leHRQYW5lbCAoKSB7IGdvVG9QYW5lbEJ5T2Zmc2V0KDEpIH1cbiAgZnVuY3Rpb24gcHJldmlvdXNQYW5lbCAoKSB7IGdvVG9QYW5lbEJ5T2Zmc2V0KC0xKSB9XG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICBuZXh0OiBuZXh0UGFuZWwsXG4gICAgcHJldmlvdXM6IHByZXZpb3VzUGFuZWwsXG4gICAgZ29UbzogZ29Ub1BhbmVsXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ29Ub1BhbmVsIChuYW1lKSB7XG4gICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuYW1lKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZFBhbmVsTmFtZSAobmFtZSkge1xuICAgIHJldHVybiBuYW1lICE9PSB2b2lkIDAgJiYgbmFtZSAhPT0gbnVsbCAmJiBuYW1lICE9PSAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxJbmRleCAobmFtZSkge1xuICAgIHJldHVybiBwYW5lbHMuZmluZEluZGV4KHBhbmVsID0+IHtcbiAgICAgIHJldHVybiBwYW5lbC5wcm9wcy5uYW1lID09PSBuYW1lXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RW5hYmxlZFBhbmVscyAoKSB7XG4gICAgcmV0dXJuIHBhbmVscy5maWx0ZXIocGFuZWwgPT4ge1xuICAgICAgcmV0dXJuIHBhbmVsLnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUGFuZWxUcmFuc2l0aW9uIChkaXJlY3Rpb24pIHtcbiAgICBjb25zdCB2YWwgPSBkaXJlY3Rpb24gIT09IDAgJiYgcHJvcHMuYW5pbWF0ZWQgPT09IHRydWUgJiYgcGFuZWxJbmRleC52YWx1ZSAhPT0gLTFcbiAgICAgID8gJ3EtdHJhbnNpdGlvbi0tJyArIChkaXJlY3Rpb24gPT09IC0xID8gdHJhbnNpdGlvblByZXYudmFsdWUgOiB0cmFuc2l0aW9uTmV4dC52YWx1ZSlcbiAgICAgIDogbnVsbFxuXG4gICAgaWYgKHBhbmVsVHJhbnNpdGlvbi52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICBwYW5lbFRyYW5zaXRpb24udmFsdWUgPSB2YWxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvUGFuZWxCeU9mZnNldCAoZGlyZWN0aW9uLCBzdGFydEluZGV4ID0gcGFuZWxJbmRleC52YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IHN0YXJ0SW5kZXggKyBkaXJlY3Rpb25cblxuICAgIHdoaWxlIChpbmRleCA+IC0xICYmIGluZGV4IDwgcGFuZWxzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgb3B0ID0gcGFuZWxzWyBpbmRleCBdXG5cbiAgICAgIGlmIChcbiAgICAgICAgb3B0ICE9PSB2b2lkIDBcbiAgICAgICAgJiYgb3B0LnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIG9wdC5wcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgdXBkYXRlUGFuZWxUcmFuc2l0aW9uKGRpcmVjdGlvbilcbiAgICAgICAgZm9yY2VkUGFuZWxUcmFuc2l0aW9uID0gdHJ1ZVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG9wdC5wcm9wcy5uYW1lKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmb3JjZWRQYW5lbFRyYW5zaXRpb24gPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXggKz0gZGlyZWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmluZmluaXRlID09PSB0cnVlICYmIHBhbmVscy5sZW5ndGggPiAwICYmIHN0YXJ0SW5kZXggIT09IC0xICYmIHN0YXJ0SW5kZXggIT09IHBhbmVscy5sZW5ndGgpIHtcbiAgICAgIGdvVG9QYW5lbEJ5T2Zmc2V0KGRpcmVjdGlvbiwgZGlyZWN0aW9uID09PSAtMSA/IHBhbmVscy5sZW5ndGggOiAtMSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbEluZGV4ICgpIHtcbiAgICBjb25zdCBpbmRleCA9IGdldFBhbmVsSW5kZXgocHJvcHMubW9kZWxWYWx1ZSlcblxuICAgIGlmIChwYW5lbEluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgcGFuZWxJbmRleC52YWx1ZSA9IGluZGV4XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVsQ29udGVudENoaWxkICgpIHtcbiAgICBjb25zdCBwYW5lbCA9IGlzVmFsaWRQYW5lbE5hbWUocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRydWVcbiAgICAgICYmIHVwZGF0ZVBhbmVsSW5kZXgoKVxuICAgICAgJiYgcGFuZWxzWyBwYW5lbEluZGV4LnZhbHVlIF1cblxuICAgIHJldHVybiBwcm9wcy5rZWVwQWxpdmUgPT09IHRydWVcbiAgICAgID8gW1xuICAgICAgICAgIGgoS2VlcEFsaXZlLCBrZWVwQWxpdmVQcm9wcy52YWx1ZSwgW1xuICAgICAgICAgICAgaChcbiAgICAgICAgICAgICAgbmVlZHNVbmlxdWVLZWVwQWxpdmVXcmFwcGVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBnZXRDYWNoZVdpdGhGbihjb250ZW50S2V5LnZhbHVlLCAoKSA9PiAoeyAuLi5QYW5lbFdyYXBwZXIsIG5hbWU6IGNvbnRlbnRLZXkudmFsdWUgfSkpXG4gICAgICAgICAgICAgICAgOiBQYW5lbFdyYXBwZXIsXG4gICAgICAgICAgICAgIHsga2V5OiBjb250ZW50S2V5LnZhbHVlLCBzdHlsZTogdHJhbnNpdGlvblN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgICAgICgpID0+IHBhbmVsXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgOiBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXBhbmVsIHNjcm9sbCcsXG4gICAgICAgICAgICBzdHlsZTogdHJhbnNpdGlvblN0eWxlLnZhbHVlLFxuICAgICAgICAgICAga2V5OiBjb250ZW50S2V5LnZhbHVlLFxuICAgICAgICAgICAgcm9sZTogJ3RhYnBhbmVsJ1xuICAgICAgICAgIH0sIFsgcGFuZWwgXSlcbiAgICAgICAgXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxDb250ZW50ICgpIHtcbiAgICBpZiAocGFuZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzLmFuaW1hdGVkID09PSB0cnVlXG4gICAgICA/IFsgaChUcmFuc2l0aW9uLCB7IG5hbWU6IHBhbmVsVHJhbnNpdGlvbi52YWx1ZSB9LCBnZXRQYW5lbENvbnRlbnRDaGlsZCkgXVxuICAgICAgOiBnZXRQYW5lbENvbnRlbnRDaGlsZCgpXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbHNMaXN0IChzbG90cykge1xuICAgIHBhbmVscyA9IGdldE5vcm1hbGl6ZWRWTm9kZXMoXG4gICAgICBoU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcbiAgICApLmZpbHRlcihcbiAgICAgIHBhbmVsID0+IHBhbmVsLnByb3BzICE9PSBudWxsXG4gICAgICAgICYmIHBhbmVsLnByb3BzLnNsb3QgPT09IHZvaWQgMFxuICAgICAgICAmJiBpc1ZhbGlkUGFuZWxOYW1lKHBhbmVsLnByb3BzLm5hbWUpID09PSB0cnVlXG4gICAgKVxuXG4gICAgcmV0dXJuIHBhbmVscy5sZW5ndGhcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVscyAoKSB7XG4gICAgcmV0dXJuIHBhbmVsc1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYW5lbEluZGV4LFxuICAgIHBhbmVsRGlyZWN0aXZlcyxcblxuICAgIHVwZGF0ZVBhbmVsc0xpc3QsXG4gICAgdXBkYXRlUGFuZWxJbmRleCxcblxuICAgIGdldFBhbmVsQ29udGVudCxcbiAgICBnZXRFbmFibGVkUGFuZWxzLFxuICAgIGdldFBhbmVscyxcblxuICAgIGlzVmFsaWRQYW5lbE5hbWUsXG5cbiAgICBrZWVwQWxpdmVQcm9wcyxcbiAgICBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIsXG5cbiAgICBnb1RvUGFuZWxCeU9mZnNldCxcbiAgICBnb1RvUGFuZWwsXG5cbiAgICBuZXh0UGFuZWwsXG4gICAgcHJldmlvdXNQYW5lbFxuICB9XG59XG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VQYW5lbENoaWxkUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wYW5lbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYlBhbmVsJyxcblxuICBwcm9wczogdXNlUGFuZWxDaGlsZFByb3BzLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFiLXBhbmVsJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlUGFuZWwsIHsgdXNlUGFuZWxQcm9wcywgdXNlUGFuZWxFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJQYW5lbHMnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUGFuZWxQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHNcbiAgfSxcblxuICBlbWl0czogdXNlUGFuZWxFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCB2bS5wcm94eS4kcSlcblxuICAgIGNvbnN0IHsgdXBkYXRlUGFuZWxzTGlzdCwgZ2V0UGFuZWxDb250ZW50LCBwYW5lbERpcmVjdGl2ZXMgfSA9IHVzZVBhbmVsKClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGFiLXBhbmVscyBxLXBhbmVsLXBhcmVudCdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWItcGFuZWxzLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdXBkYXRlUGFuZWxzTGlzdChzbG90cylcblxuICAgICAgcmV0dXJuIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sXG4gICAgICAgIGdldFBhbmVsQ29udGVudCgpLFxuICAgICAgICAncGFuJyxcbiAgICAgICAgcHJvcHMuc3dpcGVhYmxlLFxuICAgICAgICAoKSA9PiBwYW5lbERpcmVjdGl2ZXMudmFsdWVcbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZVxuICAgICAgICBjbGFzcz1cImhwLTEwMFwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICdiZy1udi1kYXJrJzogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICdiZy1udi1saWdodCc6ICFEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgJ2ZsZXggY29sdW1uIGZsZXgtY2VudGVyJzogIWlzTW9iaWxlXG4gICAgICAgIH1cIlxuICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICd3cC0zMCc6IFNjcmVlbi5sZyxcbiAgICAgICAgICAgICAgICAnd3AtNDAnOiBTY3JlZW4ubHQubGcgJiYgIWlzTW9iaWxlXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgJ2ZsZXgganVzdGlmeS1lbmQgcS1wdC1sZyBxLXB4LW1kJzogaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICd3cC0xMDAgZmxleCBqdXN0aWZ5LWVuZCc6ICFpc01vYmlsZVxuICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvbG9naW4nKVwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInEtcHgtbm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAnZmxleCB3cC0xMDAganVzdGlmeS1jZW50ZXInIDogU2NyZWVuLnNtXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJxLXB4LW1kIHEtcHQtbGdcIj5cbiAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTIzJzogaXNYUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXdoaXRlJzogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWxlZnQnIDogIWlzTW9iaWxlIHx8IFNjcmVlbi5ndC5zbSB8fCBTY3JlZW4ueHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd3AtNjAnIDogU2NyZWVuLnNtXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLXBhZGRpbmcgcS1tYi14cyBxLW10LXNtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdjb2RlVmFsaWRhdGlvbi50d29GQVZhbGlkYXRpb24nKSB9fVxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPCEtLSBDSEFOR0UgQVVUSEVOVElDQVRJT04gTUVUSE9EIEJVVFRPTlMgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAnd3AtNjAnIDogU2NyZWVuLnNtLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2p1c3RpZnktc3RhcnQnOiBTY3JlZW4uZ3Quc20gfHwgU2NyZWVuLnhzXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggZmxleC1pbmxpbmUgbXQtMzUgXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRU1BSUwgQlROIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiID09PSAnZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBiZy1udi0ke0dldFN1ZmZpeCgnc2Vjb25kYXJ5Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtbnYtbGlnaHQtYWNjZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgdGV4dC1udi0ke0dldFN1ZmZpeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RlcnRpYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMTAgcHgtMTcgYnItMzAgZnMtMTIgbHMtMiBxLW1yLXNtIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVZpZXcoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnZmllbGRzLmVtYWlsJykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUEhPTkUgTlVNQkVSIEJUTiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYiA9PT0gJ3Bob25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctbnYtJHtHZXRTdWZmaXgoJ3NlY29uZGFyeScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LW52LWxpZ2h0LWFjY2VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYHRleHQtbnYtJHtHZXRTdWZmaXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhRGFyay5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXJ0aWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTE3IHB5LTEwIGJyLTMwIGZzLTEyIGxzLTIgY3Vyc29yLXBvaW50ZXIgcS1teC14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VWaWV3KCdwaG9uZScpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ2ZpZWxkcy5waG9uZU51bWJlcicpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEFVVEhZIEJUTiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYiA9PT0gJ2F1dGh5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctbnYtJHtHZXRTdWZmaXgoJ3NlY29uZGFyeScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LW52LWxpZ2h0LWFjY2VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYHRleHQtbnYtJHtHZXRTdWZmaXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhRGFyay5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXJ0aWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTE3IHB5LTEwIGJyLTMwIGZzLTEyIGxzLTIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVmlldygnYXV0aHknKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGh5XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbHNcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYGJnLW52LSR7RGFyay5pc0FjdGl2ZSA/ICdkYXJrJyA6ICdsaWdodCd9IHRleHQtbnYtbGlnaHQtdGVydGlhcnkgJHtTY3JlZW4uc20gPyAnd3AtNjAnIDogJ3dwLTEwMCd9YFwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZD5cbiAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLW1hcmdpbiBuby1wYWRkaW5nIG5vLXNjcm9sbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnMtMTQnOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTE2JzogIWlzTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtdC0zMCBtYi00MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ2NvZGVWYWxpZGF0aW9uLnNlbmRUbycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfSBxLW14LXhzYFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBFbmNvZGVUZXh0KGdldEVuY29kZSwgdGFiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2RlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29kZT1cImNvZGVFbWFpbC5tYWlsQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwiY291bnRlcjJGQUVtYWlsXCIgY2xhc3M9XCJ3cC0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBhZGRDb2RlPVwic2V0Q29kZUVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmVtb3ZlQ29kZT1cInNldENvZGVFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNlbmRDb2RlPVwic2VuZENvZGUoJ0Vudmlhck1haWwnLCAoZGF0YSkgPT4gY29kZUVtYWlsLm1haWxIYXNoID0gZGF0YS5oYXNoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW4gbm8tcGFkZGluZyBuby1zY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTE0JzogaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcy0xNic6ICFpc01vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMzAgbWItNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdjb2RlVmFsaWRhdGlvbi5zZW5kVG8nKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImB0ZXh0LW52LSR7R2V0U3VmZml4KCdhY2NlbnQnKX0gcS1teC14c2BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgRW5jb2RlVGV4dChnZXRFbmNvZGUsIHRhYikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29kZUlucHV0IGNsYXNzPVwid3AtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNvZGU9XCJjb2RlUGhvbmUuc21zQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJjb3VudGVyMkZBUGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAYWRkQ29kZT1cInNldENvZGVQaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEByZW1vdmVDb2RlPVwic2V0Q29kZVBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNlbmRDb2RlPVwic2VuZENvZGUoJ0VudmlhclNtcycsIChkYXRhKSA9PiBjb2RlUGhvbmUuc21zSGFzaCA9IGRhdGEuaGFzaClcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW4gbm8tcGFkZGluZyBuby1zY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF1dGh5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcy0xNCc6IGlzTW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnMtMTYnOiAhaXNNb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTMwIG1iLTQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdjb2RlVmFsaWRhdGlvbi5lbnRlcicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfSBxLW14LXhzYFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnY29kZVZhbGlkYXRpb24udG9PYnRhaW4nKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvZGVJbnB1dCA6ZGlzYWJsZT1cImxvYWRpbmdcIiBjbGFzcz1cIndwLTEwMFwiIDpjb2RlPVwiY29kZUF1dGh5XCIgOnNob3ctc2VuZC1jb2RlPVwiZmFsc2VcIiBAYWRkQ29kZT1cInNldENvZGVBdXRoeVwiIEByZW1vdmVDb2RlPVwic2V0Q29kZUF1dGh5XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuXG4gICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImBudi0ke0dldFN1ZmZpeCgncHJpbWFyeScpfWBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZ1bGwtd2lkdGggYnItMjAgcHktMTIgbXQtNDAgZnMtMTZcIlxuICAgICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlVmFsaWRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyAkdCgnYnV0dG9ucy5jb250aW51ZScpIH19XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBEYXJrLCBTY3JlZW4sIHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVhY3RpdmUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgR2V0U3VmZml4IGZyb20gJy4uLy4uL2FwcC9zaGFyZWQvaGVscGVycy9HZXRTdWZmaXgnO1xuaW1wb3J0IENvZGVJbnB1dCBmcm9tICcuLi8uLi9hcHAvY29tcG9uZW50cy9Db2RlSW5wdXQudnVlJztcbmltcG9ydCBFbmNvZGVUZXh0IGZyb20gJy4uLy4uL2FwcC9zaGFyZWQvaGVscGVycy9FbmNvZGVUZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQXV0aFN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmVzL2F1dGgnO1xuaW1wb3J0IHsgdXNlUW9yaVBheVJlcG9zaXRvcnkgfSBmcm9tICdib290L2F4aW9zJztcbmltcG9ydCB7IHN0b3JlVG9SZWZzIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgbG9naW4gPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuXG4vLyBMb2NhbGVzXG5jb25zdCB7IHQsIGxvY2FsZSB9ID0gdXNlSTE4bih7IHVzZVNjb3BlOiAnZ2xvYmFsJyB9KTtcblxuY29uc3QgY29kZUVtYWlsID0gcmVhY3RpdmU8e1xuICAgIG1haWxDb2RlOiBzdHJpbmcgfCBudWxsO1xuICAgIG1haWxIYXNoOiBzdHJpbmcgfCBudWxsXG59Pih7XG4gICAgbWFpbENvZGU6IG51bGwsXG4gICAgbWFpbEhhc2g6IG51bGxcbn0pO1xuXG5jb25zdCBjb2RlUGhvbmUgPSByZWFjdGl2ZTx7XG4gICAgc21zQ29kZTogc3RyaW5nIHwgbnVsbDtcbiAgICBzbXNIYXNoOiBzdHJpbmcgfCBudWxsO1xufT4oe1xuICAgIHNtc0NvZGU6IG51bGwsXG4gICAgc21zSGFzaDogbnVsbFxufSk7XG5cbmNvbnN0IGxvYWRpbmcgPSByZWY8Ym9vbGVhbj4oZmFsc2UpO1xuXG5jb25zdCBjb2RlQXV0aHkgPSByZWY8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbmNvbnN0IHRhYiA9IHJlZjwnZW1haWwnIHwgJ3Bob25lJyB8ICdhdXRoeSc+KCdlbWFpbCcpO1xuXG4vLyBTdG9yZXNcbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuY29uc3QgeyBsb2dpbkZvcm0gfSA9IHN0b3JlVG9SZWZzKGF1dGhTdG9yZSk7XG5cbmNvbnN0IGlzTW9iaWxlID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0Lm1kKTtcblxuY29uc3QgZ2V0QWN0aXZlTWV0aG9kID0gY29tcHV0ZWQoKCkgPT5cbntcbiAgICByZXR1cm4gYXV0aFN0b3JlLkFjdGl2ZTJGQTtcbn0pO1xuXG5jb25zdCBpc1hTID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0LnNtKTtcblxuY29uc3QgZ2V0RW5jb2RlID0gY29tcHV0ZWQoKCkgPT5cbntcbiAgICByZXR1cm4gdGFiLnZhbHVlID09PSAnZW1haWwnID8gYXV0aFN0b3JlLkVtYWlsIDogYCske2F1dGhTdG9yZS5QaG9uZX1gO1xufSk7XG5cbmNvbnN0IHNldENvZGVFbWFpbCA9ICh2YWx1ZTogc3RyaW5nKSA9Plxue1xuICAgIGNvZGVFbWFpbC5tYWlsQ29kZSA9IHZhbHVlO1xufTtcblxuY29uc3Qgc2VuZENvZGUgPSBhc3luYyhtb2R1bG86ICdFbnZpYXJNYWlsJyB8ICdFbnZpYXJTbXMnLCBmbjogKGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHZvaWQpID0+XG57XG4gICAgY29uc3QgeyBkYXRhIH0gID0gYXdhaXQgdXNlUW9yaVBheVJlcG9zaXRvcnkuc2VuZENvZGUoe1xuICAgICAgICBNb2R1bG86IG1vZHVsbyxcbiAgICAgICAgVXNlcjogPHN0cmluZz4gKGxvZ2luRm9ybS52YWx1ZS5tb2RlID09PSAnZW1haWwnID8gbG9naW5Gb3JtLnZhbHVlLmVtYWlsT3JQaG9uZSA6IGAke2xvZ2luRm9ybS52YWx1ZS5jb2RlfSR7bG9naW5Gb3JtLnZhbHVlLmVtYWlsT3JQaG9uZX1gLnJlcGxhY2VBbGwoJysnLCAnJykpLFxuICAgICAgICBQYXNzd29yZDogPHN0cmluZz4gbG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkXG4gICAgfSk7XG5cbiAgICBpZiAoZGF0YS5lcnJvcilcbiAgICB7XG4gICAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogaXNNb2JpbGUudmFsdWUgPyAnYm90dG9tJyA6ICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgbWVzc2FnZTogYFVwcy4uLiAke3QoZGF0YS5lcnJvcktleSl9YCxcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmbihkYXRhKTtcbiAgICB9XG59O1xuXG5jb25zdCBzZXRDb2RlUGhvbmUgPSAodmFsdWU6IHN0cmluZykgPT5cbntcbiAgICBjb2RlUGhvbmUuc21zQ29kZSA9IHZhbHVlO1xufTtcblxuY29uc3Qgc2V0Q29kZUF1dGh5ID0gKHZhbHVlOiBzdHJpbmcpID0+XG57XG4gICAgY29kZUF1dGh5LnZhbHVlID0gdmFsdWU7XG59O1xuXG5jb25zdCBjaGFuZ2VWaWV3ID0gKHZpZXc6IHN0cmluZykgPT5cbntcbiAgICBpZiAoXG4gICAgICAgIHZpZXcgPT09ICdwaG9uZScgJiYgZ2V0QWN0aXZlTWV0aG9kLnZhbHVlLnRlbGVmb25vIHx8XG4gICAgICAgIHZpZXcgPT09ICdlbWFpbCcgJiYgZ2V0QWN0aXZlTWV0aG9kLnZhbHVlLmNvcnJlbyB8fFxuICAgICAgICB2aWV3ID09PSAnYXV0aHknICYmIGdldEFjdGl2ZU1ldGhvZC52YWx1ZS5hdXRoeVxuICAgIClcbiAgICB7XG4gICAgICAgIHRhYi52YWx1ZSA9IHZpZXc7XG4gICAgICAgICRyb3V0ZXIucmVwbGFjZSh7XG4gICAgICAgICAgICBwYXRoOiAnL3R3by1mYWN0b3ItYXV0aCcsXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHR5cGU6IHRhYi52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb25zdCBoYW5kbGVWYWxpZGF0aW9uID0gYXN5bmMoKSA9Plxue1xuICAgIGxvYWRpbmcudmFsdWUgPSB0cnVlO1xuXG4gICAgY29uc3QgdHdvRkFWYWxpZGF0aW9uID0ge307XG5cbiAgICBpZiAodGFiLnZhbHVlID09PSAnZW1haWwnKVxuICAgIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0d29GQVZhbGlkYXRpb24sIGNvZGVFbWFpbCk7XG4gICAgfVxuXG4gICAgaWYgKHRhYi52YWx1ZSA9PT0gJ3Bob25lJylcbiAgICB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odHdvRkFWYWxpZGF0aW9uLCBjb2RlUGhvbmUpO1xuICAgIH1cblxuICAgIGlmICh0YWIudmFsdWUgPT09ICdhdXRoeScpXG4gICAge1xuICAgICAgICBPYmplY3QuYXNzaWduKHR3b0ZBVmFsaWRhdGlvbiwgeyAnMkZBVG9rZW4nOiBjb2RlQXV0aHkudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB1c2VRb3JpUGF5UmVwb3NpdG9yeS5sb2dpbih7XG4gICAgICAgIE1vZHVsbzogJ3ZhbGlkYXJDbGllbnRlJyxcbiAgICAgICAgVXNlcjogPHN0cmluZz4gKGxvZ2luRm9ybS52YWx1ZS5tb2RlID09PSAnZW1haWwnID8gbG9naW5Gb3JtLnZhbHVlLmVtYWlsT3JQaG9uZSA6IGAke2xvZ2luRm9ybS52YWx1ZS5jb2RlfSR7bG9naW5Gb3JtLnZhbHVlLmVtYWlsT3JQaG9uZX1gLnJlcGxhY2VBbGwoJysnLCAnJykpLFxuICAgICAgICBQYXNzd29yZDogPHN0cmluZz4gbG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAuLi50d29GQVZhbGlkYXRpb25cbiAgICB9KTtcbiAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2U7XG5cbiAgICBpZiAoQm9vbGVhbihkYXRhLmVycm9yKSlcbiAgICB7XG4gICAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogaXNNb2JpbGUudmFsdWUgPyAnYm90dG9tJyA6ICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgbWVzc2FnZTogYFVwcy4uLiAke3QoZGF0YT8uZXJyb3JLZXkpfWAsXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZydcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgYXV0aFN0b3JlLnNldFRva2VuKGRhdGEudG9rZW4pO1xuICAgICAgICBhdXRoU3RvcmUuc2V0VXNlck5hbWUoZGF0YS51c2VybmFtZSk7XG4gICAgICAgIGF1dGhTdG9yZS5zZXRQcmVBdXRoKGZhbHNlKTtcbiAgICAgICAgYXV0aFN0b3JlLmNsZWFyTG9naW5Gb3JtKCk7XG4gICAgICAgIGF1dGhTdG9yZS5jbGVhclNpZ25VcEZvcm0oKTtcbiAgICAgICAgYXdhaXQgJHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxufTtcblxuaWYgKCRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnF1ZXJ5KVxue1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBmaW5kID0gT2JqZWN0LmtleXMoZ2V0QWN0aXZlTWV0aG9kLnZhbHVlKS5maWx0ZXIoKGUpID0+XG4gICAge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBnZXRBY3RpdmVNZXRob2QudmFsdWVbZV07XG4gICAgfSk7XG5cbiAgICBpZiAoZmluZClcbiAgICB7XG4gICAgICAgIGNvbnN0IGF1eCA9IGZpbmQudG9TdHJpbmcoKSA9PT0gJ2NvcnJlbycgPyAnZW1haWwnIDogKGZpbmQudG9TdHJpbmcoKSA9PT0gJ3RlbGVmb25vJyA/ICdwaG9uZScgOiAnYXV0aHknKTtcbiAgICAgICAgY2hhbmdlVmlldygkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZT8ucXVlcnk/LnR5cGU/LnRvU3RyaW5nKCkgPz8gYXV4KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY2hhbmdlVmlldygkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZT8ucXVlcnk/LnR5cGU/LnRvU3RyaW5nKCkgPz8gJ2VtYWlsJyk7XG4gICAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRQSxTQUFTLFNBQVUsS0FBSztBQUl0QixRQUFNLE9BQU8sQ0FBRSxNQUFNLEdBQUcsRUFBSTtBQUU1QixNQUFJLE9BQU8sUUFBUSxZQUFZLElBQUksUUFBUTtBQUN6QyxRQUFJLE1BQU0sR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLFVBQVU7QUFDckMsWUFBTSxJQUFJLFdBQVcsR0FBRztBQUN4QixZQUFNLEtBQU0sU0FBVTtBQUFBLElBQzVCLENBQUs7QUFBQSxFQUNGO0FBRUQsU0FBTztBQUNUO0FBRUEsSUFBQSxhQUFlO0FBQUEsRUFFWDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBRU4sWUFBYSxJ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QUFBQSxRQUM5QyxRQUFRO0FBQUEsUUFDUixNQUFnQixVQUFVLE1BQU0sU0FBUyxVQUFVLFVBQVUsTUFBTSxlQUFlLEdBQUcsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLGVBQWUsV0FBVyxLQUFLLEVBQUU7QUFBQSxRQUM3SixVQUFtQixVQUFVLE1BQU07QUFBQSxRQUNuQyxHQUFHO0FBQUEsTUFBQSxDQUNOO0FBQ0QsY0FBUSxRQUFRO0FBRVosVUFBQSxRQUFRLEtBQUssS0FBSyxHQUN0QjtBQUNJLFdBQUcsT0FBTztBQUFBLFVBQ04sVUFBVSxTQUFTLFFBQVEsV0FBVztBQUFBLFVBQ3RDLFNBQVMsVUFBVSxFQUFFLDZCQUFNLFFBQVE7QUFBQSxVQUNuQyxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFBQSxDQUNUO0FBQ0Q7QUFBQSxNQUFBLE9BR0o7QUFDYyxrQkFBQSxTQUFTLEtBQUssS0FBSztBQUNuQixrQkFBQSxZQUFZLEtBQUssUUFBUTtBQUNuQyxrQkFBVSxXQUFXLEtBQUs7QUFDMUIsa0JBQVUsZUFBZTtBQUN6QixrQkFBVSxnQkFBZ0I7QUFDcEIsY0FBQSxRQUFRLEtBQUssR0FBRztBQUFBLE1BQzFCO0FBQUEsSUFBQTtBQUdBLFFBQUEsUUFBUSxhQUFhLE1BQU0sT0FDL0I7QUFFVSxZQUFBLE9BQU8sT0FBTyxLQUFLLGdCQUFnQixLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQ3hEO0FBRUksZUFBTyxnQkFBZ0IsTUFBTTtBQUFBLE1BQUEsQ0FDaEM7QUFFRCxVQUFJLE1BQ0o7QUFDVSxjQUFBLE1BQU0sS0FBSyxTQUFBLE1BQWUsV0FBVyxVQUFXLEtBQUssU0FBZSxNQUFBLGFBQWEsVUFBVTtBQUNqRyxvQkFBVywrQkFBUSxhQUFhLFVBQXJCLG1CQUE0QixVQUE1QixtQkFBbUMsU0FBbkMsbUJBQXlDLGVBQXpDLFlBQXVELEdBQUc7QUFBQSxNQUFBLE9BR3pFO0FBQ0ksb0JBQVcsK0JBQVEsYUFBYSxVQUFyQixtQkFBNEIsVUFBNUIsbUJBQW1DLFNBQW5DLG1CQUF5QyxlQUF6QyxZQUF1RCxPQUFPO0FBQUEsTUFDN0U7QUFBQSxJQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
