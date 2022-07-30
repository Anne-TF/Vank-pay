import { _ as _export_sfc, a as computed, L as __glob_3_0, o as openBlock, e as createBlock, u as unref, Q as QImg, k as createComponent, l as h, m as hSlot, M as useDarkProps, N as useRouterLinkProps, O as useDark, R as useRouterLink, y as ref, U as isKeyCode, V as stopAndPrevent, W as hUniqueSlot, s as getCurrentInstance, H as onBeforeUnmount, X as History, K as nextTick, B as watch, Y as vmHasRouter, G as onMounted, Z as getParentVm, C as onUnmounted, $ as Teleport, a0 as createGlobalNode, a1 as removeGlobalNode, a2 as client, J as listenOpts, a3 as getEventPath, a4 as useTransitionProps, T as Transition, a5 as childHasFocus, a6 as createDirective, d as defineComponent, a7 as useQuasar, a8 as useRouter, a9 as useAuthStore, aa as storeToRefs, ab as useI18n, S as Screen, ac as createElementBlock, f as createVNode, w as withCtx, h as createBaseVNode, ad as createTextVNode, ae as toDisplayString, g as withDirectives, v as vShow, n as normalizeClass, af as QIcon, P as Plugin, ag as QAvatar, ah as createCommentVNode, j as normalizeStyle, ai as QBtn, aj as Fragment, ak as renderList, al as useSize, D as hMergeSlot, am as useSizeProps, an as toRaw, ao as useSettingsStore, A as reactive, ap as watchEffect } from "./index.f0dfeb9e.js";
import { Q as QCard, a as QCardSection } from "./QCard.bd3b760c.js";
import { Q as QScrollArea } from "./QScrollArea.d091166c.js";
import { Q as QPage } from "./QPage.8c463601.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
import { r as removeFocusWaitFlag, a as addFocusWaitFlag, b as addFocusFn, Q as QInput, u as useFormProps, c as useFormInject } from "./QInput.71830f22.js";
import { b as getHorizontalScrollPosition, c as getVerticalScrollPosition, h as hasScrollbar } from "./QResizeObserver.37f17ae1.js";
import { Q as QForm } from "./QForm.c0f56036.js";
import { useQoriPayRepository } from "./axios.07c0a896.js";
import "./selection.f44b76f5.js";
import "./format.801e7424.js";
var __glob_3_1 = "assets/Qoripay.d16bf6c7.svg";
const _sfc_main$3 = {
  __name: "Logo",
  props: {
    size: {
      type: String,
      default: "120px"
    }
  },
  setup(__props) {
    const getUrl = computed(() => {
      return new URL({ "../../assets/icons/QoriPay.svg": __glob_3_0, "../../assets/icons/Qoripay.svg": __glob_3_1 }[`../../assets/icons/${"Qoripay"}.svg`], self.location).href;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QImg, {
        "spinner-color": "nv-primary",
        "spinner-size": "70px",
        width: __props.size,
        src: unref(getUrl)
      }, null, 8, ["width", "src"]);
    };
  }
};
var Logo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "Logo.vue"]]);
var QItemSection = createComponent({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var QItem = createComponent({
  name: "QItem",
  props: {
    ...useDarkProps,
    ...useRouterLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const { hasRouterLink, hasLink, linkProps, linkClass, linkTag, navigateToRouterLink } = useRouterLink();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(
      () => props.clickable === true || hasLink.value === true || props.tag === "label"
    );
    const isClickable = computed(
      () => props.disable !== true && isActionable.value === true
    );
    const classes = computed(
      () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? `${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""} q-item--active` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        hasRouterLink.value === true && navigateToRouterLink(e);
        emit("click", e);
      }
    }
    function onKeyup2(e) {
      if (isClickable.value === true && isKeyCode(e, 13) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
      );
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        onClick,
        onKeyup: onKeyup2
      };
      if (isClickable.value === true) {
        data.tabindex = props.tabindex || "0";
        Object.assign(data, linkProps.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(
        linkTag.value,
        data,
        getContent()
      );
    };
  }
});
var QList = createComponent({
  name: "QList",
  props: {
    ...useDarkProps,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const classes = computed(
      () => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
function useHistory(showing, hide, hideOnRouteChange) {
  let historyEntry;
  function removeFromHistory() {
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
  }
  onBeforeUnmount(() => {
    showing.value === true && removeFromHistory();
  });
  return {
    removeFromHistory,
    addToHistory() {
      historyEntry = {
        condition: () => hideOnRouteChange.value === true,
        handler: hide
      };
      History.add(historyEntry);
    }
  };
}
function useTimeout() {
  let timer;
  onBeforeUnmount(() => {
    clearTimeout(timer);
  });
  return {
    registerTimeout(fn, delay) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    },
    removeTimeout() {
      clearTimeout(timer);
    }
  };
}
function useTick() {
  let tickFn;
  onBeforeUnmount(() => {
    tickFn = void 0;
  });
  return {
    registerTick(fn) {
      tickFn = fn;
      nextTick(() => {
        if (tickFn === fn) {
          tickFn();
          tickFn = void 0;
        }
      });
    },
    removeTick() {
      tickFn = void 0;
    }
  };
}
const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
};
const useModelToggleEmits = [
  "before-show",
  "show",
  "before-hide",
  "hide"
];
function useModelToggle({
  showing,
  canShow,
  hideOnRouteChange,
  handleShow,
  handleHide,
  processOnMount
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let payload;
  function toggle(evt) {
    if (showing.value === true) {
      hide(evt);
    } else {
      show(evt);
    }
  }
  function show(evt) {
    if (props.disable === true || evt !== void 0 && evt.qAnchorHandled === true || canShow !== void 0 && canShow(evt) !== true) {
      return;
    }
    const listener = props["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", true);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props.modelValue === null || listener === false || false) {
      processShow(evt);
    }
  }
  function processShow(evt) {
    if (showing.value === true) {
      return;
    }
    showing.value = true;
    emit("before-show", evt);
    if (handleShow !== void 0) {
      handleShow(evt);
    } else {
      emit("show", evt);
    }
  }
  function hide(evt) {
    if (props.disable === true) {
      return;
    }
    const listener = props["onUpdate:modelValue"] !== void 0;
    if (listener === true && true) {
      emit("update:modelValue", false);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }
    if (props.modelValue === null || listener === false || false) {
      processHide(evt);
    }
  }
  function processHide(evt) {
    if (showing.value === false) {
      return;
    }
    showing.value = false;
    emit("before-hide", evt);
    if (handleHide !== void 0) {
      handleHide(evt);
    } else {
      emit("hide", evt);
    }
  }
  function processModelChange(val) {
    if (props.disable === true && val === true) {
      if (props["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", false);
      }
    } else if (val === true !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
  }
  watch(() => props.modelValue, processModelChange);
  if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
    watch(() => proxy.$route.fullPath, () => {
      if (hideOnRouteChange.value === true && showing.value === true) {
        hide();
      }
    });
  }
  processOnMount === true && onMounted(() => {
    processModelChange(props.modelValue);
  });
  const publicMethods = { show, hide, toggle };
  Object.assign(proxy, publicMethods);
  return publicMethods;
}
const portalList = [];
function getPortalVm(el) {
  return portalList.find(
    (vm) => vm.__qPortalInnerRef.value !== null && vm.__qPortalInnerRef.value.contains(el)
  );
}
function closePortalMenus(vm, evt) {
  do {
    if (vm.$options.name === "QMenu") {
      vm.hide(evt);
      if (vm.$props.separateClosePopup === true) {
        return getParentVm(vm);
      }
    } else if (vm.__qPortalInnerRef !== void 0) {
      const parent = getParentVm(vm);
      if (parent !== void 0 && parent.$options.name === "QPopupProxy") {
        vm.hide(evt);
        return parent;
      } else {
        return vm;
      }
    }
    vm = getParentVm(vm);
  } while (vm !== void 0 && vm !== null);
}
function closePortals(vm, evt, depth) {
  while (depth !== 0 && vm !== void 0 && vm !== null) {
    if (vm.__qPortalInnerRef !== void 0) {
      depth--;
      if (vm.$options.name === "QMenu") {
        vm = closePortalMenus(vm, evt);
        continue;
      }
      vm.hide(evt);
    }
    vm = getParentVm(vm);
  }
}
function isOnGlobalDialog(vm) {
  vm = vm.parent;
  while (vm !== void 0 && vm !== null) {
    if (vm.type.name === "QGlobalDialog") {
      return true;
    }
    if (vm.type.name === "QDialog" || vm.type.name === "QMenu") {
      return false;
    }
    vm = vm.parent;
  }
  return false;
}
function usePortal(vm, innerRef, renderPortalContent, checkGlobalDialog) {
  const portalIsActive = ref(false);
  const portalIsAccessible = ref(false);
  let portalEl = null;
  const focusObj = {};
  const onGlobalDialog = checkGlobalDialog === true && isOnGlobalDialog(vm);
  function showPortal(isReady) {
    if (isReady === true) {
      removeFocusWaitFlag(focusObj);
      portalIsAccessible.value = true;
      return;
    }
    portalIsAccessible.value = false;
    if (portalIsActive.value === false) {
      if (onGlobalDialog === false && portalEl === null) {
        portalEl = createGlobalNode();
      }
      portalIsActive.value = true;
      portalList.push(vm.proxy);
      addFocusWaitFlag(focusObj);
    }
  }
  function hidePortal(isReady) {
    portalIsAccessible.value = false;
    if (isReady !== true) {
      return;
    }
    removeFocusWaitFlag(focusObj);
    portalIsActive.value = false;
    const index = portalList.indexOf(vm.proxy);
    if (index > -1) {
      portalList.splice(index, 1);
    }
    if (portalEl !== null) {
      removeGlobalNode(portalEl);
      portalEl = null;
    }
  }
  onUnmounted(() => {
    hidePortal(true);
  });
  Object.assign(vm.proxy, { __qPortalInnerRef: innerRef });
  return {
    showPortal,
    hidePortal,
    portalIsActive,
    portalIsAccessible,
    renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, renderPortalContent())] : void 0
  };
}
let registered = 0, scrollPositionX, scrollPositionY, maxScrollTop, vpPendingUpdate = false, bodyLeft, bodyTop, closeTimer;
function onWheel(e) {
  if (shouldPreventScroll(e)) {
    stopAndPrevent(e);
  }
}
function shouldPreventScroll(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) {
    return true;
  }
  const path = getEventPath(e), shift = e.shiftKey && !e.deltaX, scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY), delta = shift || scrollY ? e.deltaY : e.deltaX;
  for (let index = 0; index < path.length; index++) {
    const el = path[index];
    if (hasScrollbar(el, scrollY)) {
      return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
    }
  }
  return true;
}
function onAppleScroll(e) {
  if (e.target === document) {
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
  }
}
function onAppleResize(evt) {
  if (vpPendingUpdate === true) {
    return;
  }
  vpPendingUpdate = true;
  requestAnimationFrame(() => {
    vpPendingUpdate = false;
    const { height } = evt.target, { clientHeight, scrollTop } = document.scrollingElement;
    if (maxScrollTop === void 0 || height !== window.innerHeight) {
      maxScrollTop = clientHeight - height;
      document.scrollingElement.scrollTop = scrollTop;
    }
    if (scrollTop > maxScrollTop) {
      document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
    }
  });
}
function apply(action) {
  const body = document.body, hasViewport = window.visualViewport !== void 0;
  if (action === "add") {
    const { overflowY, overflowX } = window.getComputedStyle(body);
    scrollPositionX = getHorizontalScrollPosition(window);
    scrollPositionY = getVerticalScrollPosition(window);
    bodyLeft = body.style.left;
    bodyTop = body.style.top;
    body.style.left = `-${scrollPositionX}px`;
    body.style.top = `-${scrollPositionY}px`;
    if (overflowX !== "hidden" && (overflowX === "scroll" || body.scrollWidth > window.innerWidth)) {
      body.classList.add("q-body--force-scrollbar-x");
    }
    if (overflowY !== "hidden" && (overflowY === "scroll" || body.scrollHeight > window.innerHeight)) {
      body.classList.add("q-body--force-scrollbar-y");
    }
    body.classList.add("q-body--prevent-scroll");
    document.qScrollPrevented = true;
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
        window.scrollTo(0, 0);
      } else {
        window.addEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
  }
  if (client.is.desktop === true && client.is.mac === true) {
    window[`${action}EventListener`]("wheel", onWheel, listenOpts.notPassive);
  }
  if (action === "remove") {
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.visualViewport.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
      } else {
        window.removeEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
      }
    }
    body.classList.remove("q-body--prevent-scroll");
    body.classList.remove("q-body--force-scrollbar-x");
    body.classList.remove("q-body--force-scrollbar-y");
    document.qScrollPrevented = false;
    body.style.left = bodyLeft;
    body.style.top = bodyTop;
    window.scrollTo(scrollPositionX, scrollPositionY);
    maxScrollTop = void 0;
  }
}
function preventScroll(state) {
  let action = "add";
  if (state === true) {
    registered++;
    if (closeTimer !== void 0) {
      clearTimeout(closeTimer);
      closeTimer = void 0;
      return;
    }
    if (registered > 1) {
      return;
    }
  } else {
    if (registered === 0) {
      return;
    }
    registered--;
    if (registered > 0) {
      return;
    }
    action = "remove";
    if (client.is.ios === true && client.is.nativeMobile === true) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        apply(action);
        closeTimer = void 0;
      }, 100);
      return;
    }
  }
  apply(action);
}
function usePreventScroll() {
  let currentState;
  return {
    preventBodyScroll(state) {
      if (state !== currentState && (currentState !== void 0 || state === true)) {
        currentState = state;
        preventScroll(state);
      }
    }
  };
}
const handlers$1 = [];
let escDown;
function onKeydown(evt) {
  escDown = evt.keyCode === 27;
}
function onBlur() {
  if (escDown === true) {
    escDown = false;
  }
}
function onKeyup(evt) {
  if (escDown === true) {
    escDown = false;
    if (isKeyCode(evt, 27) === true) {
      handlers$1[handlers$1.length - 1](evt);
    }
  }
}
function update(action) {
  window[action]("keydown", onKeydown);
  window[action]("blur", onBlur);
  window[action]("keyup", onKeyup);
  escDown = false;
}
function addEscapeKey(fn) {
  if (client.is.desktop === true) {
    handlers$1.push(fn);
    if (handlers$1.length === 1) {
      update("addEventListener");
    }
  }
}
function removeEscapeKey(fn) {
  const index = handlers$1.indexOf(fn);
  if (index > -1) {
    handlers$1.splice(index, 1);
    if (handlers$1.length === 0) {
      update("removeEventListener");
    }
  }
}
const handlers = [];
function trigger(e) {
  handlers[handlers.length - 1](e);
}
function addFocusout(fn) {
  if (client.is.desktop === true) {
    handlers.push(fn);
    if (handlers.length === 1) {
      document.body.addEventListener("focusin", trigger);
    }
  }
}
function removeFocusout(fn) {
  const index = handlers.indexOf(fn);
  if (index > -1) {
    handlers.splice(index, 1);
    if (handlers.length === 0) {
      document.body.removeEventListener("focusin", trigger);
    }
  }
}
let maximizedModals = 0;
const positionClass = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
};
const transitions = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
};
var QDialog = createComponent({
  name: "QDialog",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useTransitionProps,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (val) => val === "standard" || ["top", "bottom", "left", "right"].includes(val)
    }
  },
  emits: [
    ...useModelToggleEmits,
    "shake",
    "click",
    "escape-key"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const innerRef = ref(null);
    const showing = ref(false);
    const transitionState = ref(false);
    const animating = ref(false);
    let shakeTimeout, refocusTarget = null, isMaximized, avoidAutoClose;
    const hideOnRouteChange = computed(
      () => props.persistent !== true && props.noRouteDismiss !== true && props.seamless !== true
    );
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout, removeTimeout } = useTimeout();
    const { registerTick, removeTick } = useTick();
    const { showPortal, hidePortal, portalIsAccessible, renderPortal } = usePortal(
      vm,
      innerRef,
      renderPortalContent,
      true
    );
    const { hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide,
      processOnMount: true
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const classes = computed(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props.square === true ? " q-dialog__inner--square" : "")
    );
    const transitionShow = computed(
      () => "q-transition--" + (props.transitionShow === void 0 ? transitions[props.position][0] : props.transitionShow)
    );
    const transitionHide = computed(
      () => "q-transition--" + (props.transitionHide === void 0 ? transitions[props.position][1] : props.transitionHide)
    );
    const transition = computed(() => transitionState.value === true ? transitionHide.value : transitionShow.value);
    const transitionStyle = computed(
      () => `--q-transition-duration: ${props.transitionDuration}ms`
    );
    const useBackdrop = computed(() => showing.value === true && props.seamless !== true);
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const rootClasses = computed(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`,
      attrs.class
    ]);
    watch(showing, (val) => {
      nextTick(() => {
        transitionState.value = val;
      });
    });
    watch(() => props.maximized, (state) => {
      showing.value === true && updateMaximized(state);
    });
    watch(useBackdrop, (val) => {
      preventBodyScroll(val);
      if (val === true) {
        addFocusout(onFocusChange);
        addEscapeKey(onEscapeKey);
      } else {
        removeFocusout(onFocusChange);
        removeEscapeKey(onEscapeKey);
      }
    });
    function handleShow(evt) {
      removeTimeout();
      removeTick();
      addToHistory();
      refocusTarget = props.noRefocus === false && document.activeElement !== null ? document.activeElement : null;
      updateMaximized(props.maximized);
      showPortal();
      animating.value = true;
      if (props.noFocus !== true) {
        document.activeElement !== null && document.activeElement.blur();
        registerTick(focus);
      }
      registerTimeout(() => {
        if (vm.proxy.$q.platform.is.ios === true) {
          if (props.seamless !== true && document.activeElement) {
            const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height = window.visualViewport !== void 0 ? window.visualViewport.height : innerHeight;
            if (top > 0 && bottom > height / 2) {
              document.scrollingElement.scrollTop = Math.min(
                document.scrollingElement.scrollHeight - height,
                bottom >= innerHeight ? Infinity : Math.ceil(document.scrollingElement.scrollTop + bottom - height / 2)
              );
            }
            document.activeElement.scrollIntoView();
          }
          avoidAutoClose = true;
          innerRef.value.click();
          avoidAutoClose = false;
        }
        showPortal(true);
        animating.value = false;
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTimeout();
      removeTick();
      removeFromHistory();
      cleanup(true);
      animating.value = true;
      hidePortal();
      if (refocusTarget !== null) {
        refocusTarget.focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        animating.value = false;
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function focus(selector) {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node === null || node.contains(document.activeElement) === true) {
          return;
        }
        node = node.querySelector(selector || "[autofocus], [data-autofocus]") || node;
        node.focus({ preventScroll: true });
      });
    }
    function shake() {
      focus();
      emit("shake");
      const node = innerRef.value;
      if (node !== null) {
        node.classList.remove("q-animate--scale");
        node.classList.add("q-animate--scale");
        clearTimeout(shakeTimeout);
        shakeTimeout = setTimeout(() => {
          if (innerRef.value !== null) {
            node.classList.remove("q-animate--scale");
            focus();
          }
        }, 170);
      }
    }
    function onEscapeKey() {
      if (props.seamless !== true) {
        if (props.persistent === true || props.noEscDismiss === true) {
          props.maximized !== true && props.noShake !== true && shake();
        } else {
          emit("escape-key");
          hide();
        }
      }
    }
    function cleanup(hiding) {
      clearTimeout(shakeTimeout);
      if (hiding === true || showing.value === true) {
        updateMaximized(false);
        if (props.seamless !== true) {
          preventBodyScroll(false);
          removeFocusout(onFocusChange);
          removeEscapeKey(onEscapeKey);
        }
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function updateMaximized(active) {
      if (active === true) {
        if (isMaximized !== true) {
          maximizedModals < 1 && document.body.classList.add("q-body--dialog");
          maximizedModals++;
          isMaximized = true;
        }
      } else if (isMaximized === true) {
        if (maximizedModals < 2) {
          document.body.classList.remove("q-body--dialog");
        }
        maximizedModals--;
        isMaximized = false;
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        hide(e);
        emit("click", e);
      }
    }
    function onBackdropClick(e) {
      if (props.persistent !== true && props.noBackdropDismiss !== true) {
        hide(e);
      } else if (props.noShake !== true) {
        shake();
      }
    }
    function onFocusChange(evt) {
      if (props.allowFocusOutside !== true && portalIsAccessible.value === true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus('[tabindex]:not([tabindex="-1"])');
      }
    }
    Object.assign(vm.proxy, {
      focus,
      shake,
      __updateRefocusTarget(target) {
        refocusTarget = target || null;
      }
    });
    onBeforeUnmount(cleanup);
    function renderPortalContent() {
      return h("div", {
        ...attrs,
        class: rootClasses.value
      }, [
        h(Transition, {
          name: "q-transition--fade",
          appear: true
        }, () => useBackdrop.value === true ? h("div", {
          class: "q-dialog__backdrop fixed-full",
          style: transitionStyle.value,
          "aria-hidden": "true",
          onMousedown: onBackdropClick
        }) : null),
        h(
          Transition,
          { name: transition.value, appear: true },
          () => showing.value === true ? h("div", {
            ref: innerRef,
            class: classes.value,
            style: transitionStyle.value,
            tabindex: -1,
            ...onEvents.value
          }, hSlot(slots.default)) : null
        )
      ]);
    }
    return renderPortal;
  }
});
const space = h("div", { class: "q-space" });
var QSpace = createComponent({
  name: "QSpace",
  setup() {
    return () => space;
  }
});
function getDepth(value) {
  if (value === false) {
    return 0;
  }
  if (value === true || value === void 0) {
    return 1;
  }
  const depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}
var ClosePopup = createDirective(
  {
    name: "close-popup",
    beforeMount(el, { value }) {
      const ctx = {
        depth: getDepth(value),
        handler(evt) {
          ctx.depth !== 0 && setTimeout(() => {
            const vm = getPortalVm(el);
            if (vm !== void 0) {
              closePortals(vm, evt, ctx.depth);
            }
          });
        },
        handlerKey(evt) {
          isKeyCode(evt, 13) === true && ctx.handler(evt);
        }
      };
      el.__qclosepopup = ctx;
      el.addEventListener("click", ctx.handler);
      el.addEventListener("keyup", ctx.handlerKey);
    },
    updated(el, { value, oldValue }) {
      if (value !== oldValue) {
        el.__qclosepopup.depth = getDepth(value);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qclosepopup;
      el.removeEventListener("click", ctx.handler);
      el.removeEventListener("keyup", ctx.handlerKey);
      delete el.__qclosepopup;
    }
  }
);
const countries = [
  {
    name: "Ascension Island",
    code: "AC",
    emoji: "\u{1F1E6}\u{1F1E8}",
    unicode: "U+1F1E6 U+1F1E8",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg",
    countryCode: "+290"
  },
  {
    name: "Andorra",
    code: "AD",
    emoji: "\u{1F1E6}\u{1F1E9}",
    unicode: "U+1F1E6 U+1F1E9",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
    countryCode: "+376"
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    emoji: "\u{1F1E6}\u{1F1EA}",
    unicode: "U+1F1E6 U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
    countryCode: "+971"
  },
  {
    name: "Afghanistan",
    code: "AF",
    emoji: "\u{1F1E6}\u{1F1EB}",
    unicode: "U+1F1E6 U+1F1EB",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
    countryCode: "+93"
  },
  {
    name: "Antigua & Barbuda",
    code: "AG",
    emoji: "\u{1F1E6}\u{1F1EC}",
    unicode: "U+1F1E6 U+1F1EC",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
    countryCode: "+1268"
  },
  {
    name: "Anguilla",
    code: "AI",
    emoji: "\u{1F1E6}\u{1F1EE}",
    unicode: "U+1F1E6 U+1F1EE",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
    countryCode: "+1264"
  },
  {
    name: "Albania",
    code: "AL",
    emoji: "\u{1F1E6}\u{1F1F1}",
    unicode: "U+1F1E6 U+1F1F1",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
    countryCode: "+355"
  },
  {
    name: "Armenia",
    code: "AM",
    emoji: "\u{1F1E6}\u{1F1F2}",
    unicode: "U+1F1E6 U+1F1F2",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
    countryCode: "+374"
  },
  {
    name: "Angola",
    code: "AO",
    emoji: "\u{1F1E6}\u{1F1F4}",
    unicode: "U+1F1E6 U+1F1F4",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
    countryCode: "+244"
  },
  {
    name: "Antarctica",
    code: "AQ",
    emoji: "\u{1F1E6}\u{1F1F6}",
    unicode: "U+1F1E6 U+1F1F6",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg",
    countryCode: "+672"
  },
  {
    name: "Venezuela",
    code: "VE",
    emoji: "\u{1F1FB}\u{1F1EA}",
    unicode: "U+1F1FB U+1F1EA",
    image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
    countryCode: "+58"
  }
];
var LoginForm_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".small-avatar-section .q-item__section--avatar[data-v-75a6ffd2] {\n  min-width: 30px !important;\n  width: 30px !important;\n}")();
const _hoisted_1$2 = { class: "text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between" };
const _hoisted_2$1 = ["disable"];
const _hoisted_3$1 = { class: "text-nv-light-tertiary q-mt-none q-mb-sm fs-14" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  props: {
    width: {
      type: Number,
      default: 0
    },
    changeView: {
      type: Function
    },
    setLang: {
      type: Function
    }
  },
  setup(__props) {
    const $q = useQuasar();
    const $router = useRouter();
    const authStore = useAuthStore();
    const { loginForm } = storeToRefs(authStore);
    const { t, locale } = useI18n({ useScope: "global" });
    const formRef = ref(null);
    const countries$1 = ref([...countries]);
    const isPwd = ref(true);
    const country = ref(false);
    const filter = ref("");
    const loading = ref(false);
    const isMobile = computed(() => Screen.lt.md);
    const getRule = computed(() => {
      return loginForm.value.mode === "email" ? [
        (val) => val && val.match(
          /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        ) || t("validations.email")
      ] : [
        (val) => val && val.length > 0 || t("validations.required")
      ];
    });
    const initializeForm = () => {
      var _a, _b, _c, _d;
      authStore.setLoginForm({
        mode: (_a = loginForm.value.mode) != null ? _a : "phone",
        emailOrPhone: (_b = loginForm.value.emailOrPhone) != null ? _b : "",
        password: (_c = loginForm.value.password) != null ? _c : "",
        code: (_d = loginForm.value.code) != null ? _d : countries$1.value[0].countryCode
      });
    };
    const changeValidate = () => {
      var _a;
      authStore.setLoginForm({
        ...loginForm.value,
        emailOrPhone: "",
        mode: loginForm.value.mode === "email" ? "phone" : "email"
      });
      $router.replace({
        path: "/login",
        query: {
          mode: loginForm.value.mode
        }
      });
      (_a = formRef.value) == null ? void 0 : _a.reset();
    };
    const getEmoji = (countryCode) => {
      var _a, _b;
      return (_b = (_a = countries.find((c) => c.countryCode === countryCode)) == null ? void 0 : _a.emoji) != null ? _b : null;
    };
    const setCode = (code) => {
      authStore.setLoginForm({
        ...loginForm.value,
        code
      });
      country.value = false;
    };
    const onFilter = () => {
      if (filter.value.length > 0) {
        countries$1.value = countries.filter((e) => {
          return e.name.toLowerCase().includes(filter.value.toLowerCase());
        });
      } else {
        countries$1.value = [...countries];
      }
    };
    const changeView = (mode) => {
      authStore.setLoginForm({
        ...loginForm.value,
        mode
      });
      $router.replace({
        path: "/login",
        query: {
          mode: loginForm.value.mode
        }
      });
    };
    const handleLogin = async () => {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate().then(async (validated) => {
        if (validated) {
          loading.value = true;
          const { data } = await useQoriPayRepository.preLogin({
            Modulo: "loginCliente",
            User: loginForm.value.mode === "email" ? loginForm.value.emailOrPhone : `${loginForm.value.code}${loginForm.value.emailOrPhone}`.replaceAll("+", ""),
            Password: loginForm.value.password
          });
          loading.value = false;
          if (data.error) {
            $q.notify({
              position: isMobile.value ? "bottom" : "top-right",
              message: `Ups... ${t(data.errorKey)}`,
              color: "red",
              icon: "warning"
            });
            return;
          } else {
            authStore.setPreAuth(true);
            authStore.setActive2FA(data.active2fa);
            authStore.setPhone(data.userData.telefono);
            authStore.setEmail(data.userData.correo);
            authStore.setUserName(data.userData.usuario);
            await $router.push("/two-factor-auth");
          }
        }
      });
    };
    const initializeMode = () => {
      var _a, _b, _c, _d;
      if ($router.currentRoute.value.query) {
        const mode = (_a = loginForm.value.mode) != null ? _a : "email";
        changeView((_d = (_c = (_b = $router.currentRoute.value) == null ? void 0 : _b.query) == null ? void 0 : _c.mode) != null ? _d : mode);
      }
    };
    initializeForm();
    initializeMode();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QCardSection, null, {
          default: withCtx(() => [
            createVNode(unref(QForm), {
              ref_key: "formRef",
              ref: formRef,
              greedy: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("p", _hoisted_1$2, [
                  createTextVNode(toDisplayString(_ctx.$t("fields.email")) + " o " + toDisplayString(_ctx.$t("fields.phoneNumber")) + " ", 1),
                  withDirectives(createBaseVNode("span", {
                    onClick: _cache[0] || (_cache[0] = ($event) => changeValidate()),
                    class: normalizeClass(`text-nv-${unref(GetSuffix)(
                      "accent"
                    )} text-medium ls-2 cursor-pointer ${unref(isMobile) ? "fs-10" : "fs-12"}`)
                  }, toDisplayString(unref(loginForm).mode === "email" ? _ctx.$t("fields.phoneNumber") : _ctx.$t("fields.email")), 3), [
                    [vShow, __props.width > 444]
                  ]),
                  withDirectives(createVNode(QIcon, {
                    size: "1.6em",
                    onClick: _cache[1] || (_cache[1] = ($event) => changeValidate()),
                    color: `nv-${unref(GetSuffix)("accent")}`,
                    class: "q-mr-sm",
                    name: unref(loginForm).mode === "email" ? "smartphone" : "mail"
                  }, null, 8, ["color", "name"]), [
                    [vShow, __props.width <= 444]
                  ])
                ]),
                createVNode(QInput, {
                  rounded: "",
                  outlined: "",
                  modelValue: unref(loginForm).emailOrPhone,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(loginForm).emailOrPhone = $event),
                  color: "transparent",
                  type: "email",
                  placeholder: unref(loginForm).mode === "email" ? "money@qoripay.com" : "4240000000",
                  inputmode: unref(loginForm).mode === "phone" ? "numeric" : "text",
                  disable: loading.value,
                  class: normalizeClass(["q-mb-md", {
                    "fs-13": unref(isMobile),
                    "rounded--dark-input--withAlert--space": unref(Plugin).isActive,
                    "rounded--light-input--withAlert--space text-dark": !unref(Plugin).isActive
                  }]),
                  rules: unref(getRule)
                }, {
                  prepend: withCtx(() => {
                    var _a;
                    return [
                      unref(loginForm).mode === "phone" ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: normalizeClass(["fs-14 cursor-pointer", {
                          "text-nv-light-tertiary": ((_a = unref(loginForm).code) == null ? void 0 : _a.length) < 1
                        }]),
                        disable: loading.value,
                        onClick: _cache[2] || (_cache[2] = ($event) => country.value = true)
                      }, [
                        createVNode(QAvatar, {
                          class: "q-mr-xs",
                          color: "transparent",
                          size: "3em"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getEmoji(unref(loginForm).code)), 1)
                          ]),
                          _: 1
                        }),
                        createTextVNode(" " + toDisplayString(unref(loginForm).code) + " ", 1),
                        createVNode(QIcon, {
                          size: "21px",
                          name: !country.value ? "expand_more" : "expand_less"
                        }, null, 8, ["name"])
                      ], 10, _hoisted_2$1)) : createCommentVNode("", true),
                      createVNode(QDialog, {
                        modelValue: country.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => country.value = $event),
                        position: unref(isMobile) ? "bottom" : "standard"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCard, {
                            class: normalizeClass(["q-pa-sm no-scroll", {
                              "br-40": !unref(isMobile),
                              "bg-nv-dark": unref(Plugin).isActive,
                              "bg-nv-light": !unref(Plugin).isActive
                            }]),
                            style: normalizeStyle(`${unref(isMobile) ? "border-radius: 40px 40px 0px 0px !important; height: 60vh; width: 100%;" : "height: 600px; width: 600px;"}`)
                          }, {
                            default: withCtx(() => [
                              createVNode(QCardSection, { class: "flex justify-between q-pt-lg" }, {
                                default: withCtx(() => [
                                  createVNode(QInput, {
                                    outlined: "",
                                    rounded: "",
                                    modelValue: filter.value,
                                    "onUpdate:modelValue": [
                                      _cache[3] || (_cache[3] = ($event) => filter.value = $event),
                                      onFilter
                                    ],
                                    disable: loading.value,
                                    color: `nv-${unref(GetSuffix)("primary")}`,
                                    class: normalizeClass(["wp-85 ls-2 text-regular", {
                                      "fs-13": unref(isMobile),
                                      "rounded--dark-input--withAlert--space": unref(Plugin).isActive,
                                      "rounded--light-input--withAlert--space text-nv-light-accent": !unref(Plugin).isActive
                                    }]),
                                    placeholder: _ctx.$t("fields.search")
                                  }, null, 8, ["modelValue", "disable", "color", "class", "placeholder"]),
                                  withDirectives(createVNode(QBtn, {
                                    icon: "close",
                                    flat: "",
                                    round: "",
                                    color: "nv-light-tertiary"
                                  }, null, 512), [
                                    [ClosePopup]
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(QCardSection, { class: "hp-80 q-py-xs" }, {
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
                                      createVNode(QList, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(countries$1.value, (item, index) => {
                                            return openBlock(), createBlock(QItem, {
                                              key: index,
                                              clickable: "",
                                              active: item.countryCode === unref(loginForm).code,
                                              "active-class": `text-nv-${unref(GetSuffix)(
                                                "accent"
                                              )}`,
                                              onClick: ($event) => setCode(item.countryCode),
                                              class: normalizeClass([{ "text-white": unref(Plugin).isActive, "text-nv-dark": !unref(Plugin).isActive }, "small-avatar-section cursor-pointer"])
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(QItemSection, { avatar: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.emoji), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(QItemSection, { class: "fs-13 ls-2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(QItemSection, {
                                                  class: normalizeClass([`${unref(loginForm).code === item.countryCode ? `text-nv-${unref(GetSuffix)("accent")}` : ""}`, "fs-13"]),
                                                  side: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.countryCode), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1032, ["active", "active-class", "onClick", "class"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["thumb-style", "barStyle"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["class", "style"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "position"])
                    ];
                  }),
                  _: 1
                }, 8, ["modelValue", "placeholder", "inputmode", "disable", "class", "rules"]),
                createVNode(QSpace),
                createBaseVNode("p", _hoisted_3$1, toDisplayString(_ctx.$t("fields.password")), 1),
                createVNode(QInput, {
                  rounded: "",
                  outlined: "",
                  modelValue: unref(loginForm).password,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(loginForm).password = $event),
                  placeholder: "************",
                  disable: loading.value,
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
                  append: withCtx(() => {
                    var _a;
                    return [
                      withDirectives(createVNode(QIcon, {
                        name: isPwd.value ? "visibility" : "visibility_off",
                        class: "cursor-pointer",
                        onClick: _cache[6] || (_cache[6] = ($event) => isPwd.value = !isPwd.value)
                      }, null, 8, ["name"]), [
                        [vShow, ((_a = unref(loginForm).password) == null ? void 0 : _a.length) > 0]
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["modelValue", "disable", "type", "class", "rules"]),
                createVNode(QBtn, {
                  color: `nv-${unref(GetSuffix)("primary")}`,
                  class: "full-width br-20 py-12 q-mt-lg fs-16",
                  unelevated: "",
                  "no-caps": "",
                  loading: loading.value,
                  onClick: handleLogin
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("buttons.login")), 1)
                  ]),
                  _: 1
                }, 8, ["color", "loading"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }),
        createVNode(QCardSection, { class: "fs-12 text-nv-light-tertiary q-py-none" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t("login.newInPlatform")) + " ", 1),
            createBaseVNode("span", {
              class: normalizeClass(`text-nv-${unref(GetSuffix)(
                "accent"
              )} cursor-pointer`),
              onClick: _cache[8] || (_cache[8] = ($event) => changeView("sign-up"))
            }, toDisplayString(_ctx.$t("login.createAnAccount")), 3),
            createBaseVNode("p", {
              onClick: _cache[9] || (_cache[9] = ($event) => unref($router).push("/forgot-password")),
              class: normalizeClass(`text-nv-${unref(GetSuffix)(
                "accent"
              )} q-pt-md cursor-pointer`)
            }, toDisplayString(_ctx.$t("login.forgotYourPassword")), 3)
          ]),
          _: 1
        }),
        createBaseVNode("div", {
          class: "fs-10 text-center text-nv-light-tertiary cursor-pointer",
          onClick: _cache[10] || (_cache[10] = ($event) => __props.setLang(unref(locale).includes("es") ? "en-US" : "es-ES"))
        }, [
          createTextVNode(toDisplayString(_ctx.$t("buttons.changeLanguageTo")) + " ", 1),
          createBaseVNode("span", {
            class: normalizeClass(["ml-3", `text-nv-${unref(GetSuffix)("accent")}`])
          }, toDisplayString(_ctx.$t(
            `langs.${unref(locale).includes("es") ? "english" : "spanish"}`
          )), 3)
        ])
      ], 64);
    };
  }
});
var LoginForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-75a6ffd2"], ["__file", "LoginForm.vue"]]);
function useRefocusTarget(props, rootRef) {
  const refocusRef = ref(null);
  const refocusTargetEl = computed(() => {
    if (props.disable !== true) {
      return null;
    }
    return h("span", {
      ref: refocusRef,
      class: "no-outline",
      tabindex: -1
    });
  });
  function refocusTarget(e) {
    const root = rootRef.value;
    if (e !== void 0 && e.type.indexOf("key") === 0) {
      if (root !== null && document.activeElement !== root && root.contains(document.activeElement) === true) {
        root.focus();
      }
    } else if (refocusRef.value !== null && (e === void 0 || root !== null && root.contains(e.target) === true)) {
      refocusRef.value.focus();
    }
  }
  return {
    refocusTargetEl,
    refocusTarget
  };
}
var optionSizes = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
};
const useCheckboxProps = {
  ...useDarkProps,
  ...useSizeProps,
  ...useFormProps,
  modelValue: {
    required: true,
    default: null
  },
  val: {},
  trueValue: { default: true },
  falseValue: { default: false },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (v) => v === "tf" || v === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
};
const useCheckboxEmits = ["update:modelValue"];
function useCheckbox(type, getInner) {
  const { props, slots, emit, proxy } = getCurrentInstance();
  const { $q } = proxy;
  const isDark = useDark(props, $q);
  const rootRef = ref(null);
  const { refocusTargetEl, refocusTarget } = useRefocusTarget(props, rootRef);
  const sizeStyle = useSize(props, optionSizes);
  const modelIsArray = computed(
    () => props.val !== void 0 && Array.isArray(props.modelValue)
  );
  const index = computed(() => {
    const val = toRaw(props.val);
    return modelIsArray.value === true ? props.modelValue.findIndex((opt) => toRaw(opt) === val) : -1;
  });
  const isTrue = computed(() => modelIsArray.value === true ? index.value > -1 : toRaw(props.modelValue) === toRaw(props.trueValue));
  const isFalse = computed(() => modelIsArray.value === true ? index.value === -1 : toRaw(props.modelValue) === toRaw(props.falseValue));
  const isIndeterminate = computed(
    () => isTrue.value === false && isFalse.value === false
  );
  const tabindex = computed(() => props.disable === true ? -1 : props.tabindex || 0);
  const classes = computed(
    () => `q-${type} cursor-pointer no-outline row inline no-wrap items-center` + (props.disable === true ? " disabled" : "") + (isDark.value === true ? ` q-${type}--dark` : "") + (props.dense === true ? ` q-${type}--dense` : "") + (props.leftLabel === true ? " reverse" : "")
  );
  const innerClass = computed(() => {
    const state = isTrue.value === true ? "truthy" : isFalse.value === true ? "falsy" : "indet";
    const color = props.color !== void 0 && (props.keepColor === true || (type === "toggle" ? isTrue.value === true : isFalse.value !== true)) ? ` text-${props.color}` : "";
    return `q-${type}__inner relative-position non-selectable q-${type}__inner--${state}${color}`;
  });
  const formAttrs = computed(() => {
    const prop = { type: "checkbox" };
    props.name !== void 0 && Object.assign(prop, {
      "^checked": isTrue.value === true ? "checked" : void 0,
      name: props.name,
      value: modelIsArray.value === true ? props.val : props.trueValue
    });
    return prop;
  });
  const injectFormInput = useFormInject(formAttrs);
  const attributes = computed(() => {
    const attrs = {
      tabindex: tabindex.value,
      role: "checkbox",
      "aria-label": props.label,
      "aria-checked": isIndeterminate.value === true ? "mixed" : isTrue.value === true ? "true" : "false"
    };
    if (props.disable === true) {
      attrs["aria-disabled"] = "true";
    }
    return attrs;
  });
  function onClick(e) {
    if (e !== void 0) {
      stopAndPrevent(e);
      refocusTarget(e);
    }
    if (props.disable !== true) {
      emit("update:modelValue", getNextValue(), e);
    }
  }
  function getNextValue() {
    if (modelIsArray.value === true) {
      if (isTrue.value === true) {
        const val = props.modelValue.slice();
        val.splice(index.value, 1);
        return val;
      }
      return props.modelValue.concat([props.val]);
    }
    if (isTrue.value === true) {
      if (props.toggleOrder !== "ft" || props.toggleIndeterminate === false) {
        return props.falseValue;
      }
    } else if (isFalse.value === true) {
      if (props.toggleOrder === "ft" || props.toggleIndeterminate === false) {
        return props.trueValue;
      }
    } else {
      return props.toggleOrder !== "ft" ? props.trueValue : props.falseValue;
    }
    return props.indeterminateValue;
  }
  function onKeydown2(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      stopAndPrevent(e);
    }
  }
  function onKeyup2(e) {
    if (e.keyCode === 13 || e.keyCode === 32) {
      onClick(e);
    }
  }
  const getInnerContent = getInner(isTrue, isIndeterminate);
  Object.assign(proxy, { toggle: onClick });
  return () => {
    const inner = getInnerContent();
    props.disable !== true && injectFormInput(
      inner,
      "unshift",
      ` q-${type}__native absolute q-ma-none q-pa-none`
    );
    const child = [
      h("div", {
        class: innerClass.value,
        style: sizeStyle.value
      }, inner)
    ];
    if (refocusTargetEl.value !== null) {
      child.push(refocusTargetEl.value);
    }
    const label = props.label !== void 0 ? hMergeSlot(slots.default, [props.label]) : hSlot(slots.default);
    label !== void 0 && child.push(
      h("div", {
        class: `q-${type}__label q-anchor--skip`
      }, label)
    );
    return h("div", {
      ref: rootRef,
      class: classes.value,
      ...attributes.value,
      onClick,
      onKeydown: onKeydown2,
      onKeyup: onKeyup2
    }, child);
  };
}
const bgNode = h("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  h("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, [
    h("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    h("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]);
var QCheckbox = createComponent({
  name: "QCheckbox",
  props: useCheckboxProps,
  emits: useCheckboxEmits,
  setup(props) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || null
      );
      return () => icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-checkbox__icon",
            name: icon.value
          })
        ])
      ] : [bgNode];
    }
    return useCheckbox("checkbox", getInner);
  }
});
const _hoisted_1$1 = { class: "text-nv-light-tertiary q-mt-none q-mb-sm flex flex-inline items-center fs-14 justify-between" };
const _hoisted_2 = { class: "text-nv-light-tertiary q-mt-none q-mb-sm fs-14" };
const _hoisted_3 = { class: "text-nv-light-tertiary q-mt-none q-mb-sm fs-14" };
const _hoisted_4 = { class: "fs-12 text-nv-light-tertiary q-py-none q-mt-md q-mb-md row q-mx-none items-start" };
const _hoisted_5 = { class: "col flex items-start" };
const _hoisted_6 = { class: "col-11 q-pl-sm" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SignUpForm",
  props: {
    height: {
      type: Number,
      default: 0
    },
    setLang: {
      type: Function
    }
  },
  setup(__props) {
    useQuasar();
    const $router = useRouter();
    const authStore = useAuthStore();
    const { signUpForm } = storeToRefs(authStore);
    const { t, locale } = useI18n({ useScope: "global" });
    const isPwd = ref(true);
    const isPwd2 = ref(true);
    const formRef = ref(null);
    const loading = ref(false);
    const isMobile = computed(() => Screen.lt.md);
    const getName = computed(() => "Qoripay");
    const handleSignUp = async () => {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate().then(async (validated) => {
        if (validated) {
          loading.value = true;
          setInterval(() => {
            loading.value = false;
          }, 3e3);
        }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QCardSection, null, {
          default: withCtx(() => [
            createVNode(unref(QForm), {
              ref_key: "formRef",
              ref: formRef,
              greedy: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("p", _hoisted_1$1, toDisplayString(_ctx.$t("fields.email")), 1),
                createVNode(QInput, {
                  dark: "",
                  outlined: "",
                  rounded: "",
                  modelValue: unref(signUpForm).email,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(signUpForm).email = $event),
                  color: "transparent",
                  placeholder: "money@qoripay.com",
                  type: "email",
                  class: normalizeClass(["q-mb-md", {
                    "fs-13": unref(isMobile),
                    "rounded--dark-input--withAlert--space": unref(Plugin).isActive,
                    "rounded--light-input--withAlert--space text-nv-light-accent": !unref(Plugin).isActive
                  }]),
                  disable: loading.value,
                  rules: [
                    (val) => val && val.match(
                      /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                    ) || _ctx.$t("validations.email")
                  ]
                }, null, 8, ["modelValue", "disable", "class", "rules"]),
                createVNode(QSpace),
                createBaseVNode("p", _hoisted_2, toDisplayString(_ctx.$t("fields.password")), 1),
                createVNode(QInput, {
                  dark: "",
                  outlined: "",
                  rounded: "",
                  placeholder: "************",
                  modelValue: unref(signUpForm).password,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(signUpForm).password = $event),
                  color: "transparent",
                  class: normalizeClass(["q-mb-md", {
                    "fs-13": unref(isMobile),
                    "rounded--dark-input--withAlert--space": unref(Plugin).isActive,
                    "rounded--light-input--withAlert--space text-nv-light-accent": !unref(Plugin).isActive
                  }]),
                  type: isPwd.value ? "password" : "text",
                  disable: loading.value,
                  rules: [
                    (val) => val && val.length > 7 || _ctx.$t("validations.password")
                  ]
                }, {
                  append: withCtx(() => {
                    var _a;
                    return [
                      withDirectives(createVNode(QIcon, {
                        name: isPwd.value ? "visibility" : "visibility_off",
                        class: "cursor-pointer",
                        onClick: _cache[1] || (_cache[1] = ($event) => isPwd.value = !isPwd.value)
                      }, null, 8, ["name"]), [
                        [vShow, ((_a = unref(signUpForm).password) == null ? void 0 : _a.length) > 0]
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["modelValue", "type", "disable", "class", "rules"]),
                createVNode(QSpace),
                createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("fields.confirmPassword")), 1),
                createVNode(QInput, {
                  dark: "",
                  placeholder: "************",
                  outlined: "",
                  rounded: "",
                  modelValue: unref(signUpForm).confirmPassword,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(signUpForm).confirmPassword = $event),
                  color: "transparent",
                  disable: loading.value,
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
                  append: withCtx(() => {
                    var _a;
                    return [
                      withDirectives(createVNode(QIcon, {
                        name: isPwd2.value ? "visibility" : "visibility_off",
                        class: "cursor-pointer",
                        onClick: _cache[3] || (_cache[3] = ($event) => isPwd2.value = !isPwd2.value)
                      }, null, 8, ["name"]), [
                        [vShow, ((_a = unref(signUpForm).confirmPassword) == null ? void 0 : _a.length) > 0]
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["modelValue", "disable", "type", "class", "rules"]),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(QCheckbox, {
                      modelValue: unref(signUpForm).acceptedTerms,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(signUpForm).acceptedTerms = $event),
                      "checked-icon": "check_circle",
                      "unchecked-icon": "check_circle",
                      color: `nv-${unref(GetSuffix)("accent")}`,
                      "indeterminate-icon": "help",
                      size: "xs",
                      disable: loading.value
                    }, null, 8, ["modelValue", "color", "disable"])
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    createTextVNode(toDisplayString(_ctx.$t("login.termsAndPolicy")) + " ", 1),
                    createBaseVNode("span", {
                      class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} cursor-pointer`)
                    }, toDisplayString(_ctx.$t("login.terms")), 3),
                    createTextVNode(" " + toDisplayString(_ctx.$t("login.and")) + " ", 1),
                    createBaseVNode("span", {
                      class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} cursor-pointer`)
                    }, toDisplayString(_ctx.$t("login.politics")), 3),
                    createTextVNode(" " + toDisplayString(_ctx.$t("login.of")) + " " + toDisplayString(unref(getName)), 1)
                  ])
                ]),
                createVNode(QBtn, {
                  color: `nv-${unref(GetSuffix)("primary")}`,
                  class: "full-width br-20 py-12 q-mt-lg fs-16",
                  unelevated: "",
                  "no-caps": "",
                  loading: loading.value,
                  onClick: handleSignUp
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("buttons.createAccount")), 1)
                  ]),
                  _: 1
                }, 8, ["color", "loading"])
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }),
        createVNode(QCardSection, { class: "fs-12 text-nv-light-tertiary q-py-none q-pb-md" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.$t("login.alreadyHaveAnAccount")) + " ", 1),
            createBaseVNode("span", {
              class: normalizeClass(`text-nv-${unref(GetSuffix)("accent")} cursor-pointer`),
              onClick: _cache[6] || (_cache[6] = ($event) => unref($router).replace("/login"))
            }, toDisplayString(_ctx.$t("login.login")), 3)
          ]),
          _: 1
        }),
        createBaseVNode("div", {
          class: "fs-10 text-center text-nv-light-tertiary cursor-pointer",
          onClick: _cache[7] || (_cache[7] = ($event) => __props.setLang(unref(locale).includes("es") ? "en-US" : "es-ES"))
        }, [
          createTextVNode(toDisplayString(_ctx.$t("buttons.changeLanguageTo")) + " ", 1),
          createBaseVNode("span", {
            class: normalizeClass(["ml-3", `text-nv-${unref(GetSuffix)("accent")}`])
          }, toDisplayString(_ctx.$t(
            `langs.${unref(locale).includes("es") ? "english" : "spanish"}`
          )), 3)
        ])
      ], 64);
    };
  }
});
var SignUpForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "SignUpForm.vue"]]);
var AuthPage_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".dark--card[data-v-2cdc461b] {\n  background-color: #1d2229;\n}")();
const _hoisted_1 = { class: "flex flex-inline justify-start" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthPage",
  setup(__props) {
    const settingsStore = useSettingsStore();
    const $router = useRouter();
    const animateTimeout = ref(null);
    useI18n({ useScope: "global" });
    useQuasar();
    const button = ref("login");
    const position = ref(40);
    const screenSize = reactive({
      height: 0,
      width: 0
    });
    const isMobile = computed(() => Screen.lt.md);
    const isXS = computed(() => Screen.lt.sm);
    const name = computed(() => "Qoripay");
    const switchMode = () => {
      void settingsStore.setDarkMode(!Plugin.isActive);
    };
    const animateDrawerTo = (height) => {
      clearTimeout(animateTimeout.value);
      const diff = height - position.value;
      if (diff !== 0) {
        position.value += Math.abs(diff) < 2 ? diff : Math.round(diff / 2);
        animateTimeout.value = setTimeout(() => {
          animateDrawerTo(height);
        }, 30);
      }
    };
    const changeView = (view) => {
      button.value = view;
      $router.replace(`/${view}`);
      if (button.value === "sign-up" && isMobile) {
        animateDrawerTo(0);
      } else {
        animateDrawerTo(39);
      }
    };
    const onResize = () => {
      screenSize.height = window.innerHeight;
      screenSize.width = window.innerWidth;
    };
    const setLang = (lang) => {
      void settingsStore.setLang(lang);
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    watchEffect(() => {
      if ($router.currentRoute.value.fullPath.includes("/sign-up")) {
        button.value = "sign-up";
        position.value = 0;
      } else if ($router.currentRoute.value.fullPath.includes("/login")) {
        button.value = "login";
      }
    });
    onUnmounted(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", onResize, true);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: normalizeClass(["hp-100", { row: !unref(isMobile) }])
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass({
              "hp-40 flex column items-center justify-evenly no-margin": unref(isMobile),
              "col-7 col-lg-8 row items-center justify-center": !unref(isMobile)
            })
          }, [
            createBaseVNode("div", {
              class: normalizeClass([{
                "text-nv-light-accent": !unref(Plugin).isActive,
                "text-white": unref(Plugin).isActive,
                "q-px-sm": unref(isXS)
              }, "flex column items-center"])
            }, [
              createVNode(Logo, {
                class: "q-mb-lg",
                size: unref(isMobile) ? "165px" : "545px"
              }, null, 8, ["size"]),
              createBaseVNode("h5", {
                class: normalizeClass([{ "fs-23": unref(isXS) }, "no-padding q-mb-xs q-mt-sm text-center"])
              }, toDisplayString(_ctx.$t("login.welcome", [`${unref(name)}`])), 3),
              createBaseVNode("p", {
                class: normalizeClass(["no-margin no-padding text-center", {
                  "fs-12": !unref(isMobile) && unref(isXS),
                  "fs-11": unref(isXS)
                }])
              }, toDisplayString(_ctx.$t("login.caption")), 3)
            ], 2)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass({
              "hp-100 wp-100": unref(isMobile) && button.value === "sign-up" || screenSize.height <= 764,
              "hp-60": unref(isMobile) && button.value === "login" && screenSize.height > 764,
              "col-5 col-lg-4 flex justify-center items-center": !unref(isMobile)
            }),
            style: normalizeStyle(`${unref(isMobile) && button.value === "sign-up" || screenSize.height <= 764 ? `top: ${screenSize.height <= 764 ? "0" : position.value}% !important; position: absolute;` : ""}`)
          }, [
            createVNode(QCard, {
              style: normalizeStyle(`${unref(isMobile) && button.value === "login" && screenSize.height > 764 ? "border-radius: 40px 40px 0px 0px !important;" : ""}`),
              class: normalizeClass(["no-margin q-px-sm", {
                "dark--card": unref(Plugin).isActive,
                "bg-white": !unref(Plugin).isActive,
                "br-40 hp-80 wp-93 q-py-md": !unref(isMobile),
                "hp-100 wp-100 q-py-md": unref(isMobile)
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
                    createVNode(QCardSection, { class: "pt-20 row no-margin justify-between" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_1, [
                          createBaseVNode("div", {
                            class: normalizeClass([`
                            ${button.value === "login" ? `bg-nv-${unref(GetSuffix)("secondary")}
                            ${!unref(Plugin).isActive ? "text-nv-light-accent" : ""}` : `text-nv-${unref(GetSuffix)(
                              `${!unref(Plugin).isActive ? "tertiary" : "secondary"}`
                            )}`}
                        `, "flex items-center justify-center px-17 br-30 fs-12 ls-2 q-mr-sm cursor-pointer"]),
                            onClick: _cache[0] || (_cache[0] = ($event) => changeView("login"))
                          }, toDisplayString(_ctx.$t("buttons.login")), 3),
                          createBaseVNode("div", {
                            class: normalizeClass([`
                            ${button.value === "sign-up" ? `bg-nv-${unref(GetSuffix)("secondary")}
                            ${!unref(Plugin).isActive ? "text-nv-light-accent" : ""}` : `text-nv-${unref(GetSuffix)(
                              `${!unref(Plugin).isActive ? "tertiary" : "secondary"}`
                            )}`}
                        `, "flex items-center justify-center px-17 br-30 fs-12 ls-2 cursor-pointer"]),
                            onClick: _cache[1] || (_cache[1] = ($event) => changeView("sign-up"))
                          }, toDisplayString(_ctx.$t("buttons.register")), 3)
                        ]),
                        createVNode(QBtn, {
                          onClick: _cache[2] || (_cache[2] = ($event) => switchMode()),
                          flat: "",
                          round: "",
                          color: "nv-light-tertiary",
                          icon: unref(Plugin).isActive ? "light_mode" : "dark_mode"
                        }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(Transition, {
                      mode: "in-out",
                      "enter-active-class": `${unref(isMobile) ? "" : "animated zoomIn"}`,
                      duration: { enter: 0, leave: 0 }
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", null, [
                          createVNode(LoginForm, {
                            width: screenSize.width,
                            "change-view": changeView,
                            "set-lang": setLang
                          }, null, 8, ["width"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["enter-active-class"]), [
                      [vShow, button.value === "login"]
                    ]),
                    withDirectives(createVNode(Transition, {
                      mode: "in-out",
                      "enter-active-class": `${unref(isMobile) ? "" : "animated zoomIn"}`,
                      duration: { enter: 0, leave: 0 }
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", null, [
                          createVNode(SignUpForm, {
                            height: screenSize.height,
                            "set-lang": setLang
                          }, null, 8, ["height"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["enter-active-class"]), [
                      [vShow, button.value === "sign-up"]
                    ])
                  ]),
                  _: 1
                }, 8, ["thumb-style", "barStyle"])
              ]),
              _: 1
            }, 8, ["style", "class"])
          ], 6)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
var AuthPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2cdc461b"], ["__file", "AuthPage.vue"]]);
export { AuthPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFBhZ2UuN2ZiZjU5ZGQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvUW9yaXBheS5zdmciLCIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9nby52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2l0ZW0vUUl0ZW1TZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pdGVtL1FJdGVtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pdGVtL1FMaXN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtaGlzdG9yeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRpbWVvdXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aWNrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9wb3J0YWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wb3J0YWwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcmV2ZW50LXNjcm9sbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXByZXZlbnQtc2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9lc2NhcGUta2V5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9mb2N1c291dC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZGlhbG9nL1FEaWFsb2cuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwYWNlL1FTcGFjZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvQ2xvc2VQb3B1cC5qcyIsIi4uLy4uLy4uL3NyYy9hc3NldHMvcmVzb3VyY2VzL2NvdW50cmllcy50cyIsIi4uLy4uLy4uL3NyYy9BdXRoL2NvbXBvbmVudC9Mb2dpbkZvcm0udnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcmVmb2N1cy10YXJnZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL29wdGlvbi1zaXplcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvY2hlY2tib3gvdXNlLWNoZWNrYm94LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jaGVja2JveC9RQ2hlY2tib3guanMiLCIuLi8uLi8uLi9zcmMvQXV0aC9jb21wb25lbnQvU2lnblVwRm9ybS52dWUiLCIuLi8uLi8uLi9zcmMvQXV0aC9wYWdlcy9BdXRoUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJfX1ZJVEVfQVNTRVRfX2QxNmJmNmM3X19cIiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaW1nXG4gICAgc3Bpbm5lci1jb2xvcj1cIm52LXByaW1hcnlcIlxuICAgIHNwaW5uZXItc2l6ZT1cIjcwcHhcIlxuICAgIDp3aWR0aD1cInNpemVcIlxuICAgIDpzcmM9XCJnZXRVcmxcIlxuICAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcblxuZGVmaW5lUHJvcHMoe1xuICAgIHNpemU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnMTIwcHgnXG4gICAgfVxufSk7XG5cbmNvbnN0IGdldFVybCA9IGNvbXB1dGVkKCgpID0+XG57XG4gICAgcmV0dXJuIG5ldyBVUkwoYC4uLy4uL2Fzc2V0cy9pY29ucy8ke3Byb2Nlc3MuZW52LkFQUF9OQU1FfS5zdmdgLCBpbXBvcnQubWV0YS51cmwpLmhyZWY7XG59KTtcbjwvc2NyaXB0PiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSXRlbVNlY3Rpb24nLFxuXG4gIHByb3BzOiB7XG4gICAgYXZhdGFyOiBCb29sZWFuLFxuICAgIHRodW1ibmFpbDogQm9vbGVhbixcbiAgICBzaWRlOiBCb29sZWFuLFxuICAgIHRvcDogQm9vbGVhbixcbiAgICBub1dyYXA6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaXRlbV9fc2VjdGlvbiBjb2x1bW4nXG4gICAgICArIGAgcS1pdGVtX19zZWN0aW9uLS0keyBwcm9wcy5hdmF0YXIgPT09IHRydWUgfHwgcHJvcHMuc2lkZSA9PT0gdHJ1ZSB8fCBwcm9wcy50aHVtYm5haWwgPT09IHRydWUgPyAnc2lkZScgOiAnbWFpbicgfWBcbiAgICAgICsgKHByb3BzLnRvcCA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19zZWN0aW9uLS10b3AganVzdGlmeS1zdGFydCcgOiAnIGp1c3RpZnktY2VudGVyJylcbiAgICAgICsgKHByb3BzLmF2YXRhciA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19zZWN0aW9uLS1hdmF0YXInIDogJycpXG4gICAgICArIChwcm9wcy50aHVtYm5haWwgPT09IHRydWUgPyAnIHEtaXRlbV9fc2VjdGlvbi0tdGh1bWJuYWlsJyA6ICcnKVxuICAgICAgKyAocHJvcHMubm9XcmFwID09PSB0cnVlID8gJyBxLWl0ZW1fX3NlY3Rpb24tLW5vd3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VSb3V0ZXJMaW5rLCB7IHVzZVJvdXRlckxpbmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJvdXRlci1saW5rLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSXRlbScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlUm91dGVyTGlua1Byb3BzLFxuXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGl2J1xuICAgIH0sXG5cbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIGNsaWNrYWJsZTogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBpbnNldExldmVsOiBOdW1iZXIsXG5cbiAgICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgZm9jdXNlZDogQm9vbGVhbixcbiAgICBtYW51YWxGb2N1czogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbICdjbGljaycsICdrZXl1cCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgaGFzUm91dGVyTGluaywgaGFzTGluaywgbGlua1Byb3BzLCBsaW5rQ2xhc3MsIGxpbmtUYWcsIG5hdmlnYXRlVG9Sb3V0ZXJMaW5rIH0gPSB1c2VSb3V0ZXJMaW5rKClcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBpc0FjdGlvbmFibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuY2xpY2thYmxlID09PSB0cnVlXG4gICAgICAgIHx8IGhhc0xpbmsudmFsdWUgPT09IHRydWVcbiAgICAgICAgfHwgcHJvcHMudGFnID09PSAnbGFiZWwnXG4gICAgKVxuXG4gICAgY29uc3QgaXNDbGlja2FibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBpc0FjdGlvbmFibGUudmFsdWUgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWl0ZW0gcS1pdGVtLXR5cGUgcm93IG5vLXdyYXAnXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1pdGVtLS1kZW5zZScgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1pdGVtLS1kYXJrJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGhhc0xpbmsudmFsdWUgPT09IHRydWUgJiYgcHJvcHMuYWN0aXZlID09PSBudWxsXG4gICAgICAgICAgPyBsaW5rQ2xhc3MudmFsdWVcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBgJHsgcHJvcHMuYWN0aXZlQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuYWN0aXZlQ2xhc3MgfWAgOiAnJyB9IHEtaXRlbS0tYWN0aXZlYFxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIHEtaXRlbS0tY2xpY2thYmxlIHEtbGluayBjdXJzb3ItcG9pbnRlciAnXG4gICAgICAgICAgICArIChwcm9wcy5tYW51YWxGb2N1cyA9PT0gdHJ1ZSA/ICdxLW1hbnVhbC1mb2N1c2FibGUnIDogJ3EtZm9jdXNhYmxlIHEtaG92ZXJhYmxlJylcbiAgICAgICAgICAgICsgKHByb3BzLmZvY3VzZWQgPT09IHRydWUgPyAnIHEtbWFudWFsLWZvY3VzYWJsZS0tZm9jdXNlZCcgOiAnJylcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuaW5zZXRMZXZlbCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ1JpZ2h0JyA6ICdMZWZ0J1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgWyAncGFkZGluZycgKyBkaXIgXTogKDE2ICsgcHJvcHMuaW5zZXRMZXZlbCAqIDU2KSArICdweCdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgICAgaWYgKGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChibHVyVGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGUucUtleUV2ZW50ICE9PSB0cnVlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBibHVyVGFyZ2V0UmVmLnZhbHVlKSB7XG4gICAgICAgICAgICByb290UmVmLnZhbHVlLmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlICYmIG5hdmlnYXRlVG9Sb3V0ZXJMaW5rKGUpXG4gICAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleXVwIChlKSB7XG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgaXNLZXlDb2RlKGUsIDEzKSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICAgIC8vIGZvciByaXBwbGVcbiAgICAgICAgZS5xS2V5RXZlbnQgPSB0cnVlXG5cbiAgICAgICAgLy8gZm9yIGNsaWNrIHRyaWdnZXJcbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywgZSlcbiAgICAgICAgZXZ0LnFLZXlFdmVudCA9IHRydWVcbiAgICAgICAgcm9vdFJlZi52YWx1ZS5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH1cblxuICAgICAgZW1pdCgna2V5dXAnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgY2hpbGQudW5zaGlmdChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJUYXJnZXRSZWYgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgb25LZXl1cFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YS50YWJpbmRleCA9IHByb3BzLnRhYmluZGV4IHx8ICcwJ1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIGxpbmtQcm9wcy52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkYXRhWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChcbiAgICAgICAgbGlua1RhZy52YWx1ZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZ2V0Q29udGVudCgpXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FMaXN0JyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIHNlcGFyYXRvcjogQm9vbGVhbixcbiAgICBwYWRkaW5nOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpc3QnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1saXN0LS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWxpc3QtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc2VwYXJhdG9yID09PSB0cnVlID8gJyBxLWxpc3QtLXNlcGFyYXRvcicgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1saXN0LS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMucGFkZGluZyA9PT0gdHJ1ZSA/ICcgcS1saXN0LS1wYWRkaW5nJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgb25CZWZvcmVVbm1vdW50IH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc2hvd2luZywgaGlkZSwgaGlkZU9uUm91dGVDaGFuZ2UpIHtcbiAgbGV0IGhpc3RvcnlFbnRyeVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21IaXN0b3J5ICgpIHtcbiAgICBpZiAoaGlzdG9yeUVudHJ5ICE9PSB2b2lkIDApIHtcbiAgICAgIEhpc3RvcnkucmVtb3ZlKGhpc3RvcnlFbnRyeSlcbiAgICAgIGhpc3RvcnlFbnRyeSA9IHZvaWQgMFxuICAgIH1cbiAgfVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiByZW1vdmVGcm9tSGlzdG9yeSgpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICByZW1vdmVGcm9tSGlzdG9yeSxcblxuICAgIGFkZFRvSGlzdG9yeSAoKSB7XG4gICAgICBoaXN0b3J5RW50cnkgPSB7XG4gICAgICAgIGNvbmRpdGlvbjogKCkgPT4gaGlkZU9uUm91dGVDaGFuZ2UudmFsdWUgPT09IHRydWUsXG4gICAgICAgIGhhbmRsZXI6IGhpZGVcbiAgICAgIH1cblxuICAgICAgSGlzdG9yeS5hZGQoaGlzdG9yeUVudHJ5KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgb25CZWZvcmVVbm1vdW50IH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCB0aW1lclxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJUaW1lb3V0IChmbiwgZGVsYXkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmbiwgZGVsYXkpXG4gICAgfSxcblxuICAgIHJlbW92ZVRpbWVvdXQgKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgbmV4dFRpY2ssIG9uQmVmb3JlVW5tb3VudCB9IGZyb20gJ3Z1ZSdcblxuLypcbiAqIFVzYWdlOlxuICogICAgcmVnaXN0ZXJUaWNrKGZuKVxuICogICAgcmVnaXN0ZXJUaWNrKGZuKVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRpY2tGblxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgdGlja0ZuID0gdm9pZCAwXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlclRpY2sgKGZuKSB7XG4gICAgICB0aWNrRm4gPSBmblxuXG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGlmICh0aWNrRm4gPT09IGZuKSB7XG4gICAgICAgICAgdGlja0ZuKClcbiAgICAgICAgICB0aWNrRm4gPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgcmVtb3ZlVGljayAoKSB7XG4gICAgICB0aWNrRm4gPSB2b2lkIDBcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHdhdGNoLCBuZXh0VGljaywgb25Nb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHZtSGFzUm91dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxuZXhwb3J0IGNvbnN0IHVzZU1vZGVsVG9nZ2xlUHJvcHMgPSB7XG4gIG1vZGVsVmFsdWU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IG51bGxcbiAgfSxcblxuICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IFsgRnVuY3Rpb24sIEFycmF5IF1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZU1vZGVsVG9nZ2xlRW1pdHMgPSBbXG4gICdiZWZvcmUtc2hvdycsICdzaG93JywgJ2JlZm9yZS1oaWRlJywgJ2hpZGUnXG5dXG5cbi8vIGhhbmRsZVNob3cvaGFuZGxlSGlkZSAtPiByZW1vdmVUaWNrKCksIHNlbGYgKCYgZW1pdCBzaG93KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe1xuICBzaG93aW5nLFxuICBjYW5TaG93LCAvLyBvcHRpb25hbFxuICBoaWRlT25Sb3V0ZUNoYW5nZSwgLy8gb3B0aW9uYWxcbiAgaGFuZGxlU2hvdywgLy8gb3B0aW9uYWxcbiAgaGFuZGxlSGlkZSwgLy8gb3B0aW9uYWxcbiAgcHJvY2Vzc09uTW91bnQgLy8gb3B0aW9uYWxcbn0pIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgcGF5bG9hZFxuXG4gIGZ1bmN0aW9uIHRvZ2dsZSAoZXZ0KSB7XG4gICAgaWYgKHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGhpZGUoZXZ0KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNob3coZXZ0KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3cgKGV2dCkge1xuICAgIGlmIChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgIHx8IChldnQgIT09IHZvaWQgMCAmJiBldnQucUFuY2hvckhhbmRsZWQgPT09IHRydWUpXG4gICAgICB8fCAoY2FuU2hvdyAhPT0gdm9pZCAwICYmIGNhblNob3coZXZ0KSAhPT0gdHJ1ZSlcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RlbmVyID0gcHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdICE9PSB2b2lkIDBcblxuICAgIGlmIChsaXN0ZW5lciA9PT0gdHJ1ZSAmJiBfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUpIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdHJ1ZSlcbiAgICAgIHBheWxvYWQgPSBldnRcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHBheWxvYWQgPT09IGV2dCkge1xuICAgICAgICAgIHBheWxvYWQgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCB8fCBsaXN0ZW5lciA9PT0gZmFsc2UgfHwgX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7XG4gICAgICBwcm9jZXNzU2hvdyhldnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Nob3cgKGV2dCkge1xuICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzaG93aW5nLnZhbHVlID0gdHJ1ZVxuXG4gICAgZW1pdCgnYmVmb3JlLXNob3cnLCBldnQpXG5cbiAgICBpZiAoaGFuZGxlU2hvdyAhPT0gdm9pZCAwKSB7XG4gICAgICBoYW5kbGVTaG93KGV2dClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbWl0KCdzaG93JywgZXZ0KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUgKGV2dCkge1xuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18gfHwgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbGlzdGVuZXIgPSBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gIT09IHZvaWQgMFxuXG4gICAgaWYgKGxpc3RlbmVyID09PSB0cnVlICYmIF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSkge1xuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBmYWxzZSlcbiAgICAgIHBheWxvYWQgPSBldnRcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHBheWxvYWQgPT09IGV2dCkge1xuICAgICAgICAgIHBheWxvYWQgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCB8fCBsaXN0ZW5lciA9PT0gZmFsc2UgfHwgX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7XG4gICAgICBwcm9jZXNzSGlkZShldnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hpZGUgKGV2dCkge1xuICAgIGlmIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2hvd2luZy52YWx1ZSA9IGZhbHNlXG5cbiAgICBlbWl0KCdiZWZvcmUtaGlkZScsIGV2dClcblxuICAgIGlmIChoYW5kbGVIaWRlICE9PSB2b2lkIDApIHtcbiAgICAgIGhhbmRsZUhpZGUoZXZ0KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVtaXQoJ2hpZGUnLCBldnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01vZGVsQ2hhbmdlICh2YWwpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSAmJiB2YWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gIT09IHZvaWQgMCkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgodmFsID09PSB0cnVlKSAhPT0gc2hvd2luZy52YWx1ZSkge1xuICAgICAgY29uc3QgZm4gPSB2YWwgPT09IHRydWUgPyBwcm9jZXNzU2hvdyA6IHByb2Nlc3NIaWRlXG4gICAgICBmbihwYXlsb2FkKVxuICAgIH1cbiAgfVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHByb2Nlc3NNb2RlbENoYW5nZSlcblxuICBpZiAoaGlkZU9uUm91dGVDaGFuZ2UgIT09IHZvaWQgMCAmJiB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUpIHtcbiAgICB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsICgpID0+IHtcbiAgICAgIGlmIChoaWRlT25Sb3V0ZUNoYW5nZS52YWx1ZSA9PT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGhpZGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcm9jZXNzT25Nb3VudCA9PT0gdHJ1ZSAmJiBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb2Nlc3NNb2RlbENoYW5nZShwcm9wcy5tb2RlbFZhbHVlKVxuICB9KVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBjb25zdCBwdWJsaWNNZXRob2RzID0geyBzaG93LCBoaWRlLCB0b2dnbGUgfVxuICBPYmplY3QuYXNzaWduKHByb3h5LCBwdWJsaWNNZXRob2RzKVxuXG4gIHJldHVybiBwdWJsaWNNZXRob2RzXG59XG4iLCJpbXBvcnQgeyBnZXRQYXJlbnRWbSB9IGZyb20gJy4vdm0uanMnXG5cbmV4cG9ydCBjb25zdCBwb3J0YWxMaXN0ID0gW11cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvcnRhbFZtIChlbCkge1xuICByZXR1cm4gcG9ydGFsTGlzdC5maW5kKHZtID0+XG4gICAgdm0uX19xUG9ydGFsSW5uZXJSZWYudmFsdWUgIT09IG51bGxcbiAgICAmJiB2bS5fX3FQb3J0YWxJbm5lclJlZi52YWx1ZS5jb250YWlucyhlbClcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3J0YWxNZW51cyAodm0sIGV2dCkge1xuICBkbyB7XG4gICAgaWYgKHZtLiRvcHRpb25zLm5hbWUgPT09ICdRTWVudScpIHtcbiAgICAgIHZtLmhpZGUoZXZ0KVxuXG4gICAgICAvLyBpcyB0aGlzIGEgcG9pbnQgb2Ygc2VwYXJhdGlvbj9cbiAgICAgIGlmICh2bS4kcHJvcHMuc2VwYXJhdGVDbG9zZVBvcHVwID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRWbSh2bSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodm0uX19xUG9ydGFsSW5uZXJSZWYgIT09IHZvaWQgMCkge1xuICAgICAgLy8gdHJlYXQgaXQgYXMgcG9pbnQgb2Ygc2VwYXJhdGlvbiBpZiBwYXJlbnQgaXMgUVBvcHVwUHJveHlcbiAgICAgIC8vIChzbyBtb2JpbGUgbWF0Y2hlcyBkZXNrdG9wIGJlaGF2aW9yKVxuICAgICAgLy8gYW5kIGhpZGUgaXQgdG9vXG4gICAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnRWbSh2bSlcblxuICAgICAgaWYgKHBhcmVudCAhPT0gdm9pZCAwICYmIHBhcmVudC4kb3B0aW9ucy5uYW1lID09PSAnUVBvcHVwUHJveHknKSB7XG4gICAgICAgIHZtLmhpZGUoZXZ0KVxuICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZtXG4gICAgICB9XG4gICAgfVxuXG4gICAgdm0gPSBnZXRQYXJlbnRWbSh2bSlcbiAgfSB3aGlsZSAodm0gIT09IHZvaWQgMCAmJiB2bSAhPT0gbnVsbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUG9ydGFscyAodm0sIGV2dCwgZGVwdGgpIHtcbiAgd2hpbGUgKGRlcHRoICE9PSAwICYmIHZtICE9PSB2b2lkIDAgJiYgdm0gIT09IG51bGwpIHtcbiAgICBpZiAodm0uX19xUG9ydGFsSW5uZXJSZWYgIT09IHZvaWQgMCkge1xuICAgICAgZGVwdGgtLVxuXG4gICAgICBpZiAodm0uJG9wdGlvbnMubmFtZSA9PT0gJ1FNZW51Jykge1xuICAgICAgICB2bSA9IGNsb3NlUG9ydGFsTWVudXModm0sIGV2dClcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdm0uaGlkZShldnQpXG4gICAgfVxuXG4gICAgdm0gPSBnZXRQYXJlbnRWbSh2bSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBvblVubW91bnRlZCwgVGVsZXBvcnQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGFkZEZvY3VzV2FpdEZsYWcsIHJlbW92ZUZvY3VzV2FpdEZsYWcgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2ZvY3VzLW1hbmFnZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxOb2RlLCByZW1vdmVHbG9iYWxOb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9nbG9iYWwtbm9kZXMuanMnXG5pbXBvcnQgeyBwb3J0YWxMaXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9wb3J0YWwuanMnXG5cbmZ1bmN0aW9uIGlzT25HbG9iYWxEaWFsb2cgKHZtKSB7XG4gIHZtID0gdm0ucGFyZW50XG5cbiAgd2hpbGUgKHZtICE9PSB2b2lkIDAgJiYgdm0gIT09IG51bGwpIHtcbiAgICBpZiAodm0udHlwZS5uYW1lID09PSAnUUdsb2JhbERpYWxvZycpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmICh2bS50eXBlLm5hbWUgPT09ICdRRGlhbG9nJyB8fCB2bS50eXBlLm5hbWUgPT09ICdRTWVudScpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHZtID0gdm0ucGFyZW50XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gV2FybmluZyFcbi8vIFlvdSBNVVNUIHNwZWNpZnkgXCJpbmhlcml0QXR0cnM6IGZhbHNlXCIgaW4geW91ciBjb21wb25lbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZtLCBpbm5lclJlZiwgcmVuZGVyUG9ydGFsQ29udGVudCwgY2hlY2tHbG9iYWxEaWFsb2cpIHtcbiAgLy8gc2hvd2luZywgaW5jbHVkaW5nIHdoaWxlIGluIHNob3cvaGlkZSB0cmFuc2l0aW9uXG4gIGNvbnN0IHBvcnRhbElzQWN0aXZlID0gcmVmKGZhbHNlKVxuXG4gIC8vIHNob3dpbmcgJiBub3QgaW4gYW55IHNob3cvaGlkZSB0cmFuc2l0aW9uXG4gIGNvbnN0IHBvcnRhbElzQWNjZXNzaWJsZSA9IHJlZihmYWxzZSlcblxuICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvcnRhbElzQWN0aXZlLFxuICAgICAgcG9ydGFsSXNBY2Nlc3NpYmxlLFxuXG4gICAgICBzaG93UG9ydGFsOiBub29wLFxuICAgICAgaGlkZVBvcnRhbDogbm9vcCxcbiAgICAgIHJlbmRlclBvcnRhbDogbm9vcFxuICAgIH1cbiAgfVxuXG4gIGxldCBwb3J0YWxFbCA9IG51bGxcbiAgY29uc3QgZm9jdXNPYmogPSB7fVxuICBjb25zdCBvbkdsb2JhbERpYWxvZyA9IGNoZWNrR2xvYmFsRGlhbG9nID09PSB0cnVlICYmIGlzT25HbG9iYWxEaWFsb2codm0pXG5cbiAgZnVuY3Rpb24gc2hvd1BvcnRhbCAoaXNSZWFkeSkge1xuICAgIGlmIChpc1JlYWR5ID09PSB0cnVlKSB7XG4gICAgICByZW1vdmVGb2N1c1dhaXRGbGFnKGZvY3VzT2JqKVxuICAgICAgcG9ydGFsSXNBY2Nlc3NpYmxlLnZhbHVlID0gdHJ1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcG9ydGFsSXNBY2Nlc3NpYmxlLnZhbHVlID0gZmFsc2VcblxuICAgIGlmIChwb3J0YWxJc0FjdGl2ZS52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChvbkdsb2JhbERpYWxvZyA9PT0gZmFsc2UgJiYgcG9ydGFsRWwgPT09IG51bGwpIHtcbiAgICAgICAgcG9ydGFsRWwgPSBjcmVhdGVHbG9iYWxOb2RlKClcbiAgICAgIH1cblxuICAgICAgcG9ydGFsSXNBY3RpdmUudmFsdWUgPSB0cnVlXG5cbiAgICAgIC8vIHJlZ2lzdGVyIHBvcnRhbFxuICAgICAgcG9ydGFsTGlzdC5wdXNoKHZtLnByb3h5KVxuXG4gICAgICBhZGRGb2N1c1dhaXRGbGFnKGZvY3VzT2JqKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVQb3J0YWwgKGlzUmVhZHkpIHtcbiAgICBwb3J0YWxJc0FjY2Vzc2libGUudmFsdWUgPSBmYWxzZVxuXG4gICAgaWYgKGlzUmVhZHkgIT09IHRydWUpIHsgcmV0dXJuIH1cblxuICAgIHJlbW92ZUZvY3VzV2FpdEZsYWcoZm9jdXNPYmopXG4gICAgcG9ydGFsSXNBY3RpdmUudmFsdWUgPSBmYWxzZVxuXG4gICAgLy8gdW5yZWdpc3RlciBwb3J0YWxcbiAgICBjb25zdCBpbmRleCA9IHBvcnRhbExpc3QuaW5kZXhPZih2bS5wcm94eSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcG9ydGFsTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuXG4gICAgaWYgKHBvcnRhbEVsICE9PSBudWxsKSB7XG4gICAgICByZW1vdmVHbG9iYWxOb2RlKHBvcnRhbEVsKVxuICAgICAgcG9ydGFsRWwgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgb25Vbm1vdW50ZWQoKCkgPT4geyBoaWRlUG9ydGFsKHRydWUpIH0pXG5cbiAgLy8gZXhwb3NlIHB1YmxpY2x5IG5lZWRlZCBzdHVmZiBmb3IgcG9ydGFsIHV0aWxzXG4gIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHsgX19xUG9ydGFsSW5uZXJSZWY6IGlubmVyUmVmIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93UG9ydGFsLFxuICAgIGhpZGVQb3J0YWwsXG5cbiAgICBwb3J0YWxJc0FjdGl2ZSxcbiAgICBwb3J0YWxJc0FjY2Vzc2libGUsXG5cbiAgICByZW5kZXJQb3J0YWw6ICgpID0+IChcbiAgICAgIG9uR2xvYmFsRGlhbG9nID09PSB0cnVlXG4gICAgICAgID8gcmVuZGVyUG9ydGFsQ29udGVudCgpXG4gICAgICAgIDogKFxuICAgICAgICAgICAgcG9ydGFsSXNBY3RpdmUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgICAgPyBbIGgoVGVsZXBvcnQsIHsgdG86IHBvcnRhbEVsIH0sIHJlbmRlclBvcnRhbENvbnRlbnQoKSkgXVxuICAgICAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICAgIClcbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldEV2ZW50UGF0aCwgbGlzdGVuT3B0cywgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhhc1Njcm9sbGJhciwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxubGV0XG4gIHJlZ2lzdGVyZWQgPSAwLFxuICBzY3JvbGxQb3NpdGlvblgsXG4gIHNjcm9sbFBvc2l0aW9uWSxcbiAgbWF4U2Nyb2xsVG9wLFxuICB2cFBlbmRpbmdVcGRhdGUgPSBmYWxzZSxcbiAgYm9keUxlZnQsXG4gIGJvZHlUb3AsXG4gIGNsb3NlVGltZXJcblxuZnVuY3Rpb24gb25XaGVlbCAoZSkge1xuICBpZiAoc2hvdWxkUHJldmVudFNjcm9sbChlKSkge1xuICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkUHJldmVudFNjcm9sbCAoZSkge1xuICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLWxheW91dF9fYmFja2Ryb3AnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdFxuICAgIHBhdGggPSBnZXRFdmVudFBhdGgoZSksXG4gICAgc2hpZnQgPSBlLnNoaWZ0S2V5ICYmICFlLmRlbHRhWCxcbiAgICBzY3JvbGxZID0gIXNoaWZ0ICYmIE1hdGguYWJzKGUuZGVsdGFYKSA8PSBNYXRoLmFicyhlLmRlbHRhWSksXG4gICAgZGVsdGEgPSBzaGlmdCB8fCBzY3JvbGxZID8gZS5kZWx0YVkgOiBlLmRlbHRhWFxuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXRoLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsID0gcGF0aFsgaW5kZXggXVxuXG4gICAgaWYgKGhhc1Njcm9sbGJhcihlbCwgc2Nyb2xsWSkpIHtcbiAgICAgIHJldHVybiBzY3JvbGxZXG4gICAgICAgID8gKFxuICAgICAgICAgICAgZGVsdGEgPCAwICYmIGVsLnNjcm9sbFRvcCA9PT0gMFxuICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgOiBkZWx0YSA+IDAgJiYgZWwuc2Nyb2xsVG9wICsgZWwuY2xpZW50SGVpZ2h0ID09PSBlbC5zY3JvbGxIZWlnaHRcbiAgICAgICAgICApXG4gICAgICAgIDogKFxuICAgICAgICAgICAgZGVsdGEgPCAwICYmIGVsLnNjcm9sbExlZnQgPT09IDBcbiAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgIDogZGVsdGEgPiAwICYmIGVsLnNjcm9sbExlZnQgKyBlbC5jbGllbnRXaWR0aCA9PT0gZWwuc2Nyb2xsV2lkdGhcbiAgICAgICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gb25BcHBsZVNjcm9sbCAoZSkge1xuICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50KSB7XG4gICAgLy8gcmVxdWlyZWQsIG90aGVyd2lzZSBpT1MgYmxvY2tzIGZ1cnRoZXIgc2Nyb2xsaW5nXG4gICAgLy8gdW50aWwgdGhlIG1vYmlsZSBzY3JvbGxiYXIgZGlzc2FwcGVhcnNcbiAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkFwcGxlUmVzaXplIChldnQpIHtcbiAgaWYgKHZwUGVuZGluZ1VwZGF0ZSA9PT0gdHJ1ZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdnBQZW5kaW5nVXBkYXRlID0gdHJ1ZVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgdnBQZW5kaW5nVXBkYXRlID0gZmFsc2VcblxuICAgIGNvbnN0XG4gICAgICB7IGhlaWdodCB9ID0gZXZ0LnRhcmdldCxcbiAgICAgIHsgY2xpZW50SGVpZ2h0LCBzY3JvbGxUb3AgfSA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnRcblxuICAgIGlmIChtYXhTY3JvbGxUb3AgPT09IHZvaWQgMCB8fCBoZWlnaHQgIT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgbWF4U2Nyb2xsVG9wID0gY2xpZW50SGVpZ2h0IC0gaGVpZ2h0XG4gICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPiBtYXhTY3JvbGxUb3ApIHtcbiAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wIC09IE1hdGguY2VpbCgoc2Nyb2xsVG9wIC0gbWF4U2Nyb2xsVG9wKSAvIDgpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBhcHBseSAoYWN0aW9uKSB7XG4gIGNvbnN0XG4gICAgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgaGFzVmlld3BvcnQgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQgIT09IHZvaWQgMFxuXG4gIGlmIChhY3Rpb24gPT09ICdhZGQnKSB7XG4gICAgY29uc3QgeyBvdmVyZmxvd1ksIG92ZXJmbG93WCB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYm9keSlcblxuICAgIHNjcm9sbFBvc2l0aW9uWCA9IGdldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbih3aW5kb3cpXG4gICAgc2Nyb2xsUG9zaXRpb25ZID0gZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbih3aW5kb3cpXG4gICAgYm9keUxlZnQgPSBib2R5LnN0eWxlLmxlZnRcbiAgICBib2R5VG9wID0gYm9keS5zdHlsZS50b3BcblxuICAgIGJvZHkuc3R5bGUubGVmdCA9IGAtJHsgc2Nyb2xsUG9zaXRpb25YIH1weGBcbiAgICBib2R5LnN0eWxlLnRvcCA9IGAtJHsgc2Nyb2xsUG9zaXRpb25ZIH1weGBcblxuICAgIGlmIChvdmVyZmxvd1ggIT09ICdoaWRkZW4nICYmIChvdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IGJvZHkuc2Nyb2xsV2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1mb3JjZS1zY3JvbGxiYXIteCcpXG4gICAgfVxuICAgIGlmIChvdmVyZmxvd1kgIT09ICdoaWRkZW4nICYmIChvdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IGJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSkge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWZvcmNlLXNjcm9sbGJhci15JylcbiAgICB9XG5cbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tcHJldmVudC1zY3JvbGwnKVxuICAgIGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgPSB0cnVlXG4gICAgaWYgKGNsaWVudC5pcy5pb3MgPT09IHRydWUpIHtcbiAgICAgIGlmIChoYXNWaWV3cG9ydCA9PT0gdHJ1ZSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgd2luZG93LnZpc3VhbFZpZXdwb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQXBwbGVSZXNpemUsIGxpc3Rlbk9wdHMucGFzc2l2ZUNhcHR1cmUpXG4gICAgICAgIHdpbmRvdy52aXN1YWxWaWV3cG9ydC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkFwcGxlUmVzaXplLCBsaXN0ZW5PcHRzLnBhc3NpdmVDYXB0dXJlKVxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25BcHBsZVNjcm9sbCwgbGlzdGVuT3B0cy5wYXNzaXZlQ2FwdHVyZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoY2xpZW50LmlzLmRlc2t0b3AgPT09IHRydWUgJiYgY2xpZW50LmlzLm1hYyA9PT0gdHJ1ZSkge1xuICAgIC8vIHJlZi4gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNy8wMS9zY3JvbGxpbmctaW50ZXJ2ZW50aW9uXG4gICAgd2luZG93WyBgJHsgYWN0aW9uIH1FdmVudExpc3RlbmVyYCBdKCd3aGVlbCcsIG9uV2hlZWwsIGxpc3Rlbk9wdHMubm90UGFzc2l2ZSlcbiAgfVxuXG4gIGlmIChhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgaWYgKGNsaWVudC5pcy5pb3MgPT09IHRydWUpIHtcbiAgICAgIGlmIChoYXNWaWV3cG9ydCA9PT0gdHJ1ZSkge1xuICAgICAgICB3aW5kb3cudmlzdWFsVmlld3BvcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25BcHBsZVJlc2l6ZSwgbGlzdGVuT3B0cy5wYXNzaXZlQ2FwdHVyZSlcbiAgICAgICAgd2luZG93LnZpc3VhbFZpZXdwb3J0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQXBwbGVSZXNpemUsIGxpc3Rlbk9wdHMucGFzc2l2ZUNhcHR1cmUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQXBwbGVTY3JvbGwsIGxpc3Rlbk9wdHMucGFzc2l2ZUNhcHR1cmUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLXByZXZlbnQtc2Nyb2xsJylcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3EtYm9keS0tZm9yY2Utc2Nyb2xsYmFyLXgnKVxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncS1ib2R5LS1mb3JjZS1zY3JvbGxiYXIteScpXG5cbiAgICBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkID0gZmFsc2VcblxuICAgIGJvZHkuc3R5bGUubGVmdCA9IGJvZHlMZWZ0XG4gICAgYm9keS5zdHlsZS50b3AgPSBib2R5VG9wXG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsUG9zaXRpb25YLCBzY3JvbGxQb3NpdGlvblkpXG4gICAgbWF4U2Nyb2xsVG9wID0gdm9pZCAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBhY3Rpb24gPSAnYWRkJ1xuXG4gIGlmIChzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgIHJlZ2lzdGVyZWQrK1xuXG4gICAgaWYgKGNsb3NlVGltZXIgIT09IHZvaWQgMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGNsb3NlVGltZXIpXG4gICAgICBjbG9zZVRpbWVyID0gdm9pZCAwXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocmVnaXN0ZXJlZCA+IDEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAocmVnaXN0ZXJlZCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmVnaXN0ZXJlZC0tXG5cbiAgICBpZiAocmVnaXN0ZXJlZCA+IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGFjdGlvbiA9ICdyZW1vdmUnXG5cbiAgICBpZiAoY2xpZW50LmlzLmlvcyA9PT0gdHJ1ZSAmJiBjbGllbnQuaXMubmF0aXZlTW9iaWxlID09PSB0cnVlKSB7XG4gICAgICBjbGVhclRpbWVvdXQoY2xvc2VUaW1lcilcblxuICAgICAgY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhcHBseShhY3Rpb24pXG4gICAgICAgIGNsb3NlVGltZXIgPSB2b2lkIDBcbiAgICAgIH0sIDEwMClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KGFjdGlvbilcbn1cbiIsImltcG9ydCBwcmV2ZW50U2Nyb2xsIGZyb20gJy4uLy4uL3V0aWxzL3ByZXZlbnQtc2Nyb2xsLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjdXJyZW50U3RhdGVcblxuICByZXR1cm4ge1xuICAgIHByZXZlbnRCb2R5U2Nyb2xsIChzdGF0ZSkge1xuICAgICAgaWYgKFxuICAgICAgICBzdGF0ZSAhPT0gY3VycmVudFN0YXRlXG4gICAgICAgICYmIChjdXJyZW50U3RhdGUgIT09IHZvaWQgMCB8fCBzdGF0ZSA9PT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBzdGF0ZVxuICAgICAgICBwcmV2ZW50U2Nyb2xsKHN0YXRlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4va2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5jb25zdCBoYW5kbGVycyA9IFtdXG5sZXQgZXNjRG93blxuXG5mdW5jdGlvbiBvbktleWRvd24gKGV2dCkge1xuICBlc2NEb3duID0gZXZ0LmtleUNvZGUgPT09IDI3XG59XG5cbmZ1bmN0aW9uIG9uQmx1ciAoKSB7XG4gIGlmIChlc2NEb3duID09PSB0cnVlKSB7XG4gICAgZXNjRG93biA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gb25LZXl1cCAoZXZ0KSB7XG4gIGlmIChlc2NEb3duID09PSB0cnVlKSB7XG4gICAgZXNjRG93biA9IGZhbHNlXG5cbiAgICBpZiAoaXNLZXlDb2RlKGV2dCwgMjcpID09PSB0cnVlKSB7XG4gICAgICBoYW5kbGVyc1sgaGFuZGxlcnMubGVuZ3RoIC0gMSBdKGV2dClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlIChhY3Rpb24pIHtcbiAgd2luZG93WyBhY3Rpb24gXSgna2V5ZG93bicsIG9uS2V5ZG93bilcbiAgd2luZG93WyBhY3Rpb24gXSgnYmx1cicsIG9uQmx1cilcbiAgd2luZG93WyBhY3Rpb24gXSgna2V5dXAnLCBvbktleXVwKVxuICBlc2NEb3duID0gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVzY2FwZUtleSAoZm4pIHtcbiAgaWYgKGNsaWVudC5pcy5kZXNrdG9wID09PSB0cnVlKSB7XG4gICAgaGFuZGxlcnMucHVzaChmbilcblxuICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHVwZGF0ZSgnYWRkRXZlbnRMaXN0ZW5lcicpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFc2NhcGVLZXkgKGZuKSB7XG4gIGNvbnN0IGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihmbilcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB1cGRhdGUoJ3JlbW92ZUV2ZW50TGlzdGVuZXInKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuY29uc3QgaGFuZGxlcnMgPSBbXVxuXG5mdW5jdGlvbiB0cmlnZ2VyIChlKSB7XG4gIGhhbmRsZXJzWyBoYW5kbGVycy5sZW5ndGggLSAxIF0oZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvY3Vzb3V0IChmbikge1xuICBpZiAoY2xpZW50LmlzLmRlc2t0b3AgPT09IHRydWUpIHtcbiAgICBoYW5kbGVycy5wdXNoKGZuKVxuXG4gICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdHJpZ2dlcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvY3Vzb3V0IChmbikge1xuICBjb25zdCBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoZm4pXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdHJpZ2dlcilcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBUcmFuc2l0aW9uLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWhpc3RvcnkuanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aW1lb3V0LmpzJ1xuaW1wb3J0IHVzZVRpY2sgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGljay5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzJ1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdHJhbnNpdGlvbi5qcydcbmltcG9ydCB1c2VQb3J0YWwgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcG9ydGFsLmpzJ1xuaW1wb3J0IHVzZVByZXZlbnRTY3JvbGwgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcHJldmVudC1zY3JvbGwuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgY2hpbGRIYXNGb2N1cyB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBhZGRFc2NhcGVLZXksIHJlbW92ZUVzY2FwZUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZXNjYXBlLWtleS5qcydcbmltcG9ydCB7IGFkZEZvY3Vzb3V0LCByZW1vdmVGb2N1c291dCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXNvdXQuanMnXG5pbXBvcnQgeyBhZGRGb2N1c0ZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9mb2N1cy1tYW5hZ2VyLmpzJ1xuXG5sZXQgbWF4aW1pemVkTW9kYWxzID0gMFxuXG5jb25zdCBwb3NpdGlvbkNsYXNzID0ge1xuICBzdGFuZGFyZDogJ2ZpeGVkLWZ1bGwgZmxleC1jZW50ZXInLFxuICB0b3A6ICdmaXhlZC10b3AganVzdGlmeS1jZW50ZXInLFxuICBib3R0b206ICdmaXhlZC1ib3R0b20ganVzdGlmeS1jZW50ZXInLFxuICByaWdodDogJ2ZpeGVkLXJpZ2h0IGl0ZW1zLWNlbnRlcicsXG4gIGxlZnQ6ICdmaXhlZC1sZWZ0IGl0ZW1zLWNlbnRlcidcbn1cblxuY29uc3QgdHJhbnNpdGlvbnMgPSB7XG4gIHN0YW5kYXJkOiBbICdzY2FsZScsICdzY2FsZScgXSxcbiAgdG9wOiBbICdzbGlkZS1kb3duJywgJ3NsaWRlLXVwJyBdLFxuICBib3R0b206IFsgJ3NsaWRlLXVwJywgJ3NsaWRlLWRvd24nIF0sXG4gIHJpZ2h0OiBbICdzbGlkZS1sZWZ0JywgJ3NsaWRlLXJpZ2h0JyBdLFxuICBsZWZ0OiBbICdzbGlkZS1yaWdodCcsICdzbGlkZS1sZWZ0JyBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRGlhbG9nJyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlTW9kZWxUb2dnbGVQcm9wcyxcbiAgICAuLi51c2VUcmFuc2l0aW9uUHJvcHMsXG5cbiAgICB0cmFuc2l0aW9uU2hvdzogU3RyaW5nLFxuICAgIHRyYW5zaXRpb25IaWRlOiBTdHJpbmcsXG5cbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIGF1dG9DbG9zZTogQm9vbGVhbixcbiAgICBhbGxvd0ZvY3VzT3V0c2lkZTogQm9vbGVhbixcblxuICAgIG5vRXNjRGlzbWlzczogQm9vbGVhbixcbiAgICBub0JhY2tkcm9wRGlzbWlzczogQm9vbGVhbixcbiAgICBub1JvdXRlRGlzbWlzczogQm9vbGVhbixcbiAgICBub1JlZm9jdXM6IEJvb2xlYW4sXG4gICAgbm9Gb2N1czogQm9vbGVhbixcbiAgICBub1NoYWtlOiBCb29sZWFuLFxuXG4gICAgc2VhbWxlc3M6IEJvb2xlYW4sXG5cbiAgICBtYXhpbWl6ZWQ6IEJvb2xlYW4sXG4gICAgZnVsbFdpZHRoOiBCb29sZWFuLFxuICAgIGZ1bGxIZWlnaHQ6IEJvb2xlYW4sXG5cbiAgICBzcXVhcmU6IEJvb2xlYW4sXG5cbiAgICBwb3NpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3N0YW5kYXJkJyxcbiAgICAgIHZhbGlkYXRvcjogdmFsID0+IHZhbCA9PT0gJ3N0YW5kYXJkJ1xuICAgICAgICB8fCBbICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnIF0uaW5jbHVkZXModmFsKVxuICAgIH1cbiAgfSxcblxuICBlbWl0czogW1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlRW1pdHMsXG4gICAgJ3NoYWtlJywgJ2NsaWNrJywgJ2VzY2FwZS1rZXknXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgaW5uZXJSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBzaG93aW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IHRyYW5zaXRpb25TdGF0ZSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBhbmltYXRpbmcgPSByZWYoZmFsc2UpXG5cbiAgICBsZXQgc2hha2VUaW1lb3V0LCByZWZvY3VzVGFyZ2V0ID0gbnVsbCwgaXNNYXhpbWl6ZWQsIGF2b2lkQXV0b0Nsb3NlXG5cbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5ub1JvdXRlRGlzbWlzcyAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMuc2VhbWxlc3MgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCB7IHByZXZlbnRCb2R5U2Nyb2xsIH0gPSB1c2VQcmV2ZW50U2Nyb2xsKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCwgcmVtb3ZlVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG4gICAgY29uc3QgeyByZWdpc3RlclRpY2ssIHJlbW92ZVRpY2sgfSA9IHVzZVRpY2soKVxuXG4gICAgY29uc3QgeyBzaG93UG9ydGFsLCBoaWRlUG9ydGFsLCBwb3J0YWxJc0FjY2Vzc2libGUsIHJlbmRlclBvcnRhbCB9ID0gdXNlUG9ydGFsKFxuICAgICAgdm0sIGlubmVyUmVmLCByZW5kZXJQb3J0YWxDb250ZW50LCAvKiBwbHMgZG8gY2hlY2sgaWYgb24gYSBnbG9iYWwgZGlhbG9nICovIHRydWVcbiAgICApXG5cbiAgICBjb25zdCB7IGhpZGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHtcbiAgICAgIHNob3dpbmcsXG4gICAgICBoaWRlT25Sb3V0ZUNoYW5nZSxcbiAgICAgIGhhbmRsZVNob3csXG4gICAgICBoYW5kbGVIaWRlLFxuICAgICAgcHJvY2Vzc09uTW91bnQ6IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgeyBhZGRUb0hpc3RvcnksIHJlbW92ZUZyb21IaXN0b3J5IH0gPSB1c2VIaXN0b3J5KHNob3dpbmcsIGhpZGUsIGhpZGVPblJvdXRlQ2hhbmdlKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1kaWFsb2dfX2lubmVyIGZsZXggbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICArIGAgcS1kaWFsb2dfX2lubmVyLS0keyBwcm9wcy5tYXhpbWl6ZWQgPT09IHRydWUgPyAnbWF4aW1pemVkJyA6ICdtaW5pbWl6ZWQnIH1gXG4gICAgICArIGAgcS1kaWFsb2dfX2lubmVyLS0keyBwcm9wcy5wb3NpdGlvbiB9ICR7IHBvc2l0aW9uQ2xhc3NbIHByb3BzLnBvc2l0aW9uIF0gfWBcbiAgICAgICsgKGFuaW1hdGluZy52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kaWFsb2dfX2lubmVyLS1hbmltYXRpbmcnIDogJycpXG4gICAgICArIChwcm9wcy5mdWxsV2lkdGggPT09IHRydWUgPyAnIHEtZGlhbG9nX19pbm5lci0tZnVsbHdpZHRoJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZnVsbEhlaWdodCA9PT0gdHJ1ZSA/ICcgcS1kaWFsb2dfX2lubmVyLS1mdWxsaGVpZ2h0JyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWRpYWxvZ19faW5uZXItLXNxdWFyZScgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uU2hvdyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10cmFuc2l0aW9uLS0nXG4gICAgICArIChwcm9wcy50cmFuc2l0aW9uU2hvdyA9PT0gdm9pZCAwID8gdHJhbnNpdGlvbnNbIHByb3BzLnBvc2l0aW9uIF1bIDAgXSA6IHByb3BzLnRyYW5zaXRpb25TaG93KVxuICAgIClcblxuICAgIGNvbnN0IHRyYW5zaXRpb25IaWRlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRyYW5zaXRpb24tLSdcbiAgICAgICsgKHByb3BzLnRyYW5zaXRpb25IaWRlID09PSB2b2lkIDAgPyB0cmFuc2l0aW9uc1sgcHJvcHMucG9zaXRpb24gXVsgMSBdIDogcHJvcHMudHJhbnNpdGlvbkhpZGUpXG4gICAgKVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHRyYW5zaXRpb25TdGF0ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHRyYW5zaXRpb25IaWRlLnZhbHVlXG4gICAgICAgIDogdHJhbnNpdGlvblNob3cudmFsdWVcbiAgICApKVxuXG4gICAgY29uc3QgdHJhbnNpdGlvblN0eWxlID0gY29tcHV0ZWQoXG4gICAgICAoKSA9PiBgLS1xLXRyYW5zaXRpb24tZHVyYXRpb246ICR7IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbiB9bXNgXG4gICAgKVxuXG4gICAgY29uc3QgdXNlQmFja2Ryb3AgPSBjb21wdXRlZCgoKSA9PiBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByb3BzLnNlYW1sZXNzICE9PSB0cnVlKVxuXG4gICAgY29uc3Qgb25FdmVudHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5hdXRvQ2xvc2UgPT09IHRydWVcbiAgICAgICAgPyB7IG9uQ2xpY2s6IG9uQXV0b0Nsb3NlIH1cbiAgICAgICAgOiB7fVxuICAgICkpXG5cbiAgICBjb25zdCByb290Q2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IFtcbiAgICAgICdxLWRpYWxvZyBmdWxsc2NyZWVuIG5vLXBvaW50ZXItZXZlbnRzICdcbiAgICAgICAgKyBgcS1kaWFsb2ctLSR7IHVzZUJhY2tkcm9wLnZhbHVlID09PSB0cnVlID8gJ21vZGFsJyA6ICdzZWFtbGVzcycgfWAsXG4gICAgICBhdHRycy5jbGFzc1xuICAgIF0pXG5cbiAgICB3YXRjaChzaG93aW5nLCB2YWwgPT4ge1xuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICB0cmFuc2l0aW9uU3RhdGUudmFsdWUgPSB2YWxcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1heGltaXplZCwgc3RhdGUgPT4ge1xuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVNYXhpbWl6ZWQoc3RhdGUpXG4gICAgfSlcblxuICAgIHdhdGNoKHVzZUJhY2tkcm9wLCB2YWwgPT4ge1xuICAgICAgcHJldmVudEJvZHlTY3JvbGwodmFsKVxuXG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgIGFkZEZvY3Vzb3V0KG9uRm9jdXNDaGFuZ2UpXG4gICAgICAgIGFkZEVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVGb2N1c291dChvbkZvY3VzQ2hhbmdlKVxuICAgICAgICByZW1vdmVFc2NhcGVLZXkob25Fc2NhcGVLZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3cgKGV2dCkge1xuICAgICAgcmVtb3ZlVGltZW91dCgpXG4gICAgICByZW1vdmVUaWNrKClcbiAgICAgIGFkZFRvSGlzdG9yeSgpXG5cbiAgICAgIHJlZm9jdXNUYXJnZXQgPSBwcm9wcy5ub1JlZm9jdXMgPT09IGZhbHNlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IG51bGxcbiAgICAgICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIDogbnVsbFxuXG4gICAgICB1cGRhdGVNYXhpbWl6ZWQocHJvcHMubWF4aW1pemVkKVxuICAgICAgc2hvd1BvcnRhbCgpXG4gICAgICBhbmltYXRpbmcudmFsdWUgPSB0cnVlXG5cbiAgICAgIGlmIChwcm9wcy5ub0ZvY3VzICE9PSB0cnVlKSB7XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IG51bGwgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICAgcmVnaXN0ZXJUaWNrKGZvY3VzKVxuICAgICAgfVxuXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodm0ucHJveHkuJHEucGxhdGZvcm0uaXMuaW9zID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHByb3BzLnNlYW1sZXNzICE9PSB0cnVlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHsgdG9wLCBib3R0b20gfSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgIHsgaW5uZXJIZWlnaHQgfSA9IHdpbmRvdyxcbiAgICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0ICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgICA/IHdpbmRvdy52aXN1YWxWaWV3cG9ydC5oZWlnaHRcbiAgICAgICAgICAgICAgICA6IGlubmVySGVpZ2h0XG5cbiAgICAgICAgICAgIGlmICh0b3AgPiAwICYmIGJvdHRvbSA+IGhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbEhlaWdodCAtIGhlaWdodCxcbiAgICAgICAgICAgICAgICBib3R0b20gPj0gaW5uZXJIZWlnaHRcbiAgICAgICAgICAgICAgICAgID8gSW5maW5pdHlcbiAgICAgICAgICAgICAgICAgIDogTWF0aC5jZWlsKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wICsgYm90dG9tIC0gaGVpZ2h0IC8gMilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZXF1aXJlZCBpbiBvcmRlciB0byBhdm9pZCB0aGUgXCJkb3VibGUtdGFwIG5lZWRlZFwiIGlzc3VlXG4gICAgICAgICAgYXZvaWRBdXRvQ2xvc2UgPSB0cnVlXG4gICAgICAgICAgaW5uZXJSZWYudmFsdWUuY2xpY2soKVxuICAgICAgICAgIGF2b2lkQXV0b0Nsb3NlID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dQb3J0YWwodHJ1ZSkgLy8gZG9uZSBzaG93aW5nIHBvcnRhbFxuICAgICAgICBhbmltYXRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBlbWl0KCdzaG93JywgZXZ0KVxuICAgICAgfSwgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUhpZGUgKGV2dCkge1xuICAgICAgcmVtb3ZlVGltZW91dCgpXG4gICAgICByZW1vdmVUaWNrKClcbiAgICAgIHJlbW92ZUZyb21IaXN0b3J5KClcbiAgICAgIGNsZWFudXAodHJ1ZSlcbiAgICAgIGFuaW1hdGluZy52YWx1ZSA9IHRydWVcbiAgICAgIGhpZGVQb3J0YWwoKVxuXG4gICAgICBpZiAocmVmb2N1c1RhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICByZWZvY3VzVGFyZ2V0LmZvY3VzKClcbiAgICAgICAgcmVmb2N1c1RhcmdldCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaGlkZVBvcnRhbCh0cnVlKSAvLyBkb25lIGhpZGluZywgbm93IGRlc3Ryb3lcbiAgICAgICAgYW5pbWF0aW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICAgIH0sIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb2N1cyAoc2VsZWN0b3IpIHtcbiAgICAgIGFkZEZvY3VzRm4oKCkgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGlubmVyUmVmLnZhbHVlXG5cbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihzZWxlY3RvciB8fCAnW2F1dG9mb2N1c10sIFtkYXRhLWF1dG9mb2N1c10nKSB8fCBub2RlXG4gICAgICAgIG5vZGUuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoYWtlICgpIHtcbiAgICAgIGZvY3VzKClcbiAgICAgIGVtaXQoJ3NoYWtlJylcblxuICAgICAgY29uc3Qgbm9kZSA9IGlubmVyUmVmLnZhbHVlXG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgncS1hbmltYXRlLS1zY2FsZScpXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgncS1hbmltYXRlLS1zY2FsZScpXG4gICAgICAgIGNsZWFyVGltZW91dChzaGFrZVRpbWVvdXQpXG4gICAgICAgIHNoYWtlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpbm5lclJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdxLWFuaW1hdGUtLXNjYWxlJylcbiAgICAgICAgICAgIC8vIHNvbWUgcGxhdGZvcm1zIChsaWtlIGRlc2t0b3AgQ2hyb21lKVxuICAgICAgICAgICAgLy8gcmVxdWlyZSBjYWxsaW5nIGZvY3VzKCkgYWdhaW5cbiAgICAgICAgICAgIGZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDE3MClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVzY2FwZUtleSAoKSB7XG4gICAgICBpZiAocHJvcHMuc2VhbWxlc3MgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKHByb3BzLnBlcnNpc3RlbnQgPT09IHRydWUgfHwgcHJvcHMubm9Fc2NEaXNtaXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgcHJvcHMubWF4aW1pemVkICE9PSB0cnVlICYmIHByb3BzLm5vU2hha2UgIT09IHRydWUgJiYgc2hha2UoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVtaXQoJ2VzY2FwZS1rZXknKVxuICAgICAgICAgIGhpZGUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoaGlkaW5nKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2hha2VUaW1lb3V0KVxuXG4gICAgICBpZiAoaGlkaW5nID09PSB0cnVlIHx8IHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlTWF4aW1pemVkKGZhbHNlKVxuXG4gICAgICAgIGlmIChwcm9wcy5zZWFtbGVzcyAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHByZXZlbnRCb2R5U2Nyb2xsKGZhbHNlKVxuICAgICAgICAgIHJlbW92ZUZvY3Vzb3V0KG9uRm9jdXNDaGFuZ2UpXG4gICAgICAgICAgcmVtb3ZlRXNjYXBlS2V5KG9uRXNjYXBlS2V5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChoaWRpbmcgIT09IHRydWUpIHtcbiAgICAgICAgcmVmb2N1c1RhcmdldCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVNYXhpbWl6ZWQgKGFjdGl2ZSkge1xuICAgICAgaWYgKGFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoaXNNYXhpbWl6ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICBtYXhpbWl6ZWRNb2RhbHMgPCAxICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1kaWFsb2cnKVxuICAgICAgICAgIG1heGltaXplZE1vZGFscysrXG5cbiAgICAgICAgICBpc01heGltaXplZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNNYXhpbWl6ZWQgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKG1heGltaXplZE1vZGFscyA8IDIpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3EtYm9keS0tZGlhbG9nJylcbiAgICAgICAgfVxuXG4gICAgICAgIG1heGltaXplZE1vZGFscy0tXG4gICAgICAgIGlzTWF4aW1pemVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkF1dG9DbG9zZSAoZSkge1xuICAgICAgaWYgKGF2b2lkQXV0b0Nsb3NlICE9PSB0cnVlKSB7XG4gICAgICAgIGhpZGUoZSlcbiAgICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQmFja2Ryb3BDbGljayAoZSkge1xuICAgICAgaWYgKHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWUgJiYgcHJvcHMubm9CYWNrZHJvcERpc21pc3MgIT09IHRydWUpIHtcbiAgICAgICAgaGlkZShlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocHJvcHMubm9TaGFrZSAhPT0gdHJ1ZSkge1xuICAgICAgICBzaGFrZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c0NoYW5nZSAoZXZ0KSB7XG4gICAgICAvLyB0aGUgZm9jdXMgaXMgbm90IGluIGEgdnVlIGNoaWxkIGNvbXBvbmVudFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5hbGxvd0ZvY3VzT3V0c2lkZSAhPT0gdHJ1ZVxuICAgICAgICAmJiBwb3J0YWxJc0FjY2Vzc2libGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgJiYgY2hpbGRIYXNGb2N1cyhpbm5lclJlZi52YWx1ZSwgZXZ0LnRhcmdldCkgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBmb2N1cygnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICAgIGZvY3VzLCBzaGFrZSxcblxuICAgICAgLy8gcHJpdmF0ZSBidXQgbmVlZGVkIGJ5IFFTZWxlY3RcbiAgICAgIF9fdXBkYXRlUmVmb2N1c1RhcmdldCAodGFyZ2V0KSB7XG4gICAgICAgIHJlZm9jdXNUYXJnZXQgPSB0YXJnZXQgfHwgbnVsbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoY2xlYW51cClcblxuICAgIGZ1bmN0aW9uIHJlbmRlclBvcnRhbENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgIGNsYXNzOiByb290Q2xhc3Nlcy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBoKFRyYW5zaXRpb24sIHtcbiAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJyxcbiAgICAgICAgICBhcHBlYXI6IHRydWVcbiAgICAgICAgfSwgKCkgPT4gKFxuICAgICAgICAgIHVzZUJhY2tkcm9wLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWRpYWxvZ19fYmFja2Ryb3AgZml4ZWQtZnVsbCcsXG4gICAgICAgICAgICAgIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUsXG4gICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICAgb25Nb3VzZWRvd246IG9uQmFja2Ryb3BDbGlja1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICApKSxcblxuICAgICAgICBoKFxuICAgICAgICAgIFRyYW5zaXRpb24sXG4gICAgICAgICAgeyBuYW1lOiB0cmFuc2l0aW9uLnZhbHVlLCBhcHBlYXI6IHRydWUgfSxcbiAgICAgICAgICAoKSA9PiAoXG4gICAgICAgICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICAgID8gaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICAgICAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHRyYW5zaXRpb25TdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgICAgICAgLi4ub25FdmVudHMudmFsdWVcbiAgICAgICAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyUG9ydGFsXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3BhY2UgPSBoKCdkaXYnLCB7IGNsYXNzOiAncS1zcGFjZScgfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGFjZScsXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiAoKSA9PiBzcGFjZVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBjbG9zZVBvcnRhbHMsIGdldFBvcnRhbFZtIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9wb3J0YWwuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi91dGlscy9wcml2YXRlL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbi8qXG4gKiBkZXB0aFxuICogICA8IDAgIC0tPiBjbG9zZSBhbGwgY2hhaW5cbiAqICAgMCAgICAtLT4gZGlzYWJsZWRcbiAqICAgPiAwICAtLT4gY2xvc2UgY2hhaW4gdXAgdG8gTiBwYXJlbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXREZXB0aCAodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgY29uc3QgZGVwdGggPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIHJldHVybiBpc05hTihkZXB0aCkgPyAwIDogZGVwdGhcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ2Nsb3NlLXBvcHVwJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICdjbG9zZS1wb3B1cCcsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgeyB2YWx1ZSB9KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBkZXB0aDogZ2V0RGVwdGgodmFsdWUpLFxuXG4gICAgICAgICAgaGFuZGxlciAoZXZ0KSB7XG4gICAgICAgICAgICAvLyBhbGxvdyBAY2xpY2sgdG8gYmUgZW1pdHRlZFxuICAgICAgICAgICAgY3R4LmRlcHRoICE9PSAwICYmIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2bSA9IGdldFBvcnRhbFZtKGVsKVxuICAgICAgICAgICAgICBpZiAodm0gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGNsb3NlUG9ydGFscyh2bSwgZXZ0LCBjdHguZGVwdGgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGhhbmRsZXJLZXkgKGV2dCkge1xuICAgICAgICAgICAgaXNLZXlDb2RlKGV2dCwgMTMpID09PSB0cnVlICYmIGN0eC5oYW5kbGVyKGV2dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3FjbG9zZXBvcHVwID0gY3R4XG5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjdHguaGFuZGxlcilcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjdHguaGFuZGxlcktleSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCB7IHZhbHVlLCBvbGRWYWx1ZSB9KSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICBlbC5fX3FjbG9zZXBvcHVwLmRlcHRoID0gZ2V0RGVwdGgodmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcWNsb3NlcG9wdXBcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjdHguaGFuZGxlcilcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjdHguaGFuZGxlcktleSlcbiAgICAgICAgZGVsZXRlIGVsLl9fcWNsb3NlcG9wdXBcbiAgICAgIH1cbiAgICB9XG4pXG4iLCJleHBvcnQgaW50ZXJmYWNlIElDb3VudHJ5IHsgbmFtZTogc3RyaW5nO1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBlbW9qaTogc3RyaW5nO1xuICAgIHVuaWNvZGU6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGNvdW50cnlDb2RlOiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvdW50cmllczogSUNvdW50cnlbXSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBc2NlbnNpb24gSXNsYW5kJyxcbiAgICAgICAgY29kZTogJ0FDJyxcbiAgICAgICAgZW1vamk6ICfwn4em8J+HqCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU2IFUrMUYxRTgnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQUMuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjkwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQW5kb3JyYScsXG4gICAgICAgIGNvZGU6ICdBRCcsXG4gICAgICAgIGVtb2ppOiAn8J+HpvCfh6knLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFNiBVKzFGMUU5JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0FELnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM3NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcbiAgICAgICAgY29kZTogJ0FFJyxcbiAgICAgICAgZW1vamk6ICfwn4em8J+HqicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU2IFUrMUYxRUEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQUUuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTcxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQWZnaGFuaXN0YW4nLFxuICAgICAgICBjb2RlOiAnQUYnLFxuICAgICAgICBlbW9qaTogJ/Cfh6bwn4erJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTYgVSsxRjFFQicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9BRi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys5MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0FudGlndWEgJiBCYXJidWRhJyxcbiAgICAgICAgY29kZTogJ0FHJyxcbiAgICAgICAgZW1vamk6ICfwn4em8J+HrCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU2IFUrMUYxRUMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQUcuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMTI2OCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0FuZ3VpbGxhJyxcbiAgICAgICAgY29kZTogJ0FJJyxcbiAgICAgICAgZW1vamk6ICfwn4em8J+HricsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU2IFUrMUYxRUUnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQUkuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMTI2NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0FsYmFuaWEnLFxuICAgICAgICBjb2RlOiAnQUwnLFxuICAgICAgICBlbW9qaTogJ/Cfh6bwn4exJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTYgVSsxRjFGMScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9BTC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszNTUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBcm1lbmlhJyxcbiAgICAgICAgY29kZTogJ0FNJyxcbiAgICAgICAgZW1vamk6ICfwn4em8J+HsicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU2IFUrMUYxRjInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQU0uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzc0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQW5nb2xhJyxcbiAgICAgICAgY29kZTogJ0FPJyxcbiAgICAgICAgZW1vamk6ICfwn4em8J+HtCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU2IFUrMUYxRjQnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQU8uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjQ0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQW50YXJjdGljYScsXG4gICAgICAgIGNvZGU6ICdBUScsXG4gICAgICAgIGVtb2ppOiAn8J+HpvCfh7YnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFNiBVKzFGMUY2JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0FRLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY3MidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1ZlbmV6dWVsYScsXG4gICAgICAgIGNvZGU6ICdWRScsXG4gICAgICAgIGVtb2ppOiAn8J+Hu/Cfh6onLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGQiBVKzFGMUVBJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1ZFLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzU4J1xuICAgIH0vKixcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBcmdlbnRpbmEnLFxuICAgICAgICBjb2RlOiAnQVInLFxuICAgICAgICBlbW9qaTogJ/Cfh6bwn4e3JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTYgVSsxRjFGNycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9BUi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgICAgICAgY29kZTogJ0FTJyxcbiAgICAgICAgZW1vamk6ICfwn4em8J+HuCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU2IFUrMUYxRjgnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQVMuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMTY4NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0F1c3RyaWEnLFxuICAgICAgICBjb2RlOiAnQVQnLFxuICAgICAgICBlbW9qaTogJ/Cfh6bwn4e5JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTYgVSsxRjFGOScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9BVC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys0MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0F1c3RyYWxpYScsXG4gICAgICAgIGNvZGU6ICdBVScsXG4gICAgICAgIGVtb2ppOiAn8J+HpvCfh7onLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFNiBVKzFGMUZBJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0FVLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzYxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQXJ1YmEnLFxuICAgICAgICBjb2RlOiAnQVcnLFxuICAgICAgICBlbW9qaTogJ/Cfh6bwn4e8JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTYgVSsxRjFGQycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9BVy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyOTcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICfDhWxhbmQgSXNsYW5kcycsXG4gICAgICAgIGNvZGU6ICdBWCcsXG4gICAgICAgIGVtb2ppOiAn8J+HpvCfh70nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFNiBVKzFGMUZEJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0FYLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM1OCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0F6ZXJiYWlqYW4nLFxuICAgICAgICBjb2RlOiAnQVonLFxuICAgICAgICBlbW9qaTogJ/Cfh6bwn4e/JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTYgVSsxRjFGRicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9BWi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys5OTQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCb3NuaWEgJiBIZXJ6ZWdvdmluYScsXG4gICAgICAgIGNvZGU6ICdCQScsXG4gICAgICAgIGVtb2ppOiAn8J+Hp/Cfh6YnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFNyBVKzFGMUU2JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0JBLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM4NydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JhcmJhZG9zJyxcbiAgICAgICAgY29kZTogJ0JCJyxcbiAgICAgICAgZW1vamk6ICfwn4en8J+HpycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU3IFUrMUYxRTcnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQkIuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMTI0NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JhbmdsYWRlc2gnLFxuICAgICAgICBjb2RlOiAnQkQnLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4epJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFFOScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CRC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys4ODAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCZWxnaXVtJyxcbiAgICAgICAgY29kZTogJ0JFJyxcbiAgICAgICAgZW1vamk6ICfwn4en8J+HqicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU3IFUrMUYxRUEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQkUuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCdXJraW5hIEZhc28nLFxuICAgICAgICBjb2RlOiAnQkYnLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4erJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFFQicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CRi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMjYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCdWxnYXJpYScsXG4gICAgICAgIGNvZGU6ICdCRycsXG4gICAgICAgIGVtb2ppOiAn8J+Hp/Cfh6wnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFNyBVKzFGMUVDJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0JHLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM1OSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JhaHJhaW4nLFxuICAgICAgICBjb2RlOiAnQkgnLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4etJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFFRCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CSC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys5NzMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCdXJ1bmRpJyxcbiAgICAgICAgY29kZTogJ0JJJyxcbiAgICAgICAgZW1vamk6ICfwn4en8J+HricsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU3IFUrMUYxRUUnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQkkuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjU3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmVuaW4nLFxuICAgICAgICBjb2RlOiAnQkonLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4evJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFFRicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CSi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMjknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTdC4gQmFydGjDqWxlbXknLFxuICAgICAgICBjb2RlOiAnQkwnLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4exJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFGMScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CTC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1OTAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJtdWRhJyxcbiAgICAgICAgY29kZTogJ0JNJyxcbiAgICAgICAgZW1vamk6ICfwn4en8J+HsicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU3IFUrMUYxRjInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQk0uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMTQ0MSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JydW5laScsXG4gICAgICAgIGNvZGU6ICdCTicsXG4gICAgICAgIGVtb2ppOiAn8J+Hp/Cfh7MnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFNyBVKzFGMUYzJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0JOLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY3MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JvbGl2aWEnLFxuICAgICAgICBjb2RlOiAnQk8nLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4e0JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFGNCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CTy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1OTEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDYXJpYmJlYW4gTmV0aGVybGFuZHMnLFxuICAgICAgICBjb2RlOiAnQlEnLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4e2JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFGNicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CUS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1OTknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCcmF6aWwnLFxuICAgICAgICBjb2RlOiAnQlInLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4e3JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFGNycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CUi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1NSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JhaGFtYXMnLFxuICAgICAgICBjb2RlOiAnQlMnLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4e4JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFGOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CUy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxMjQyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmh1dGFuJyxcbiAgICAgICAgY29kZTogJ0JUJyxcbiAgICAgICAgZW1vamk6ICfwn4en8J+HuScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU3IFUrMUYxRjknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQlQuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTc1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQm91dmV0IElzbGFuZCcsXG4gICAgICAgIGNvZGU6ICdCVicsXG4gICAgICAgIGVtb2ppOiAn8J+Hp/Cfh7snLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFNyBVKzFGMUZCJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0JWLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzQ3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQm90c3dhbmEnLFxuICAgICAgICBjb2RlOiAnQlcnLFxuICAgICAgICBlbW9qaTogJ/Cfh6fwn4e8JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTcgVSsxRjFGQycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9CVy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNjcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCZWxhcnVzJyxcbiAgICAgICAgY29kZTogJ0JZJyxcbiAgICAgICAgZW1vamk6ICfwn4en8J+HvicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU3IFUrMUYxRkUnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQlkuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzc1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmVsaXplJyxcbiAgICAgICAgY29kZTogJ0JaJyxcbiAgICAgICAgZW1vamk6ICfwn4en8J+HvycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU3IFUrMUYxRkYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQlouc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTAxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2FuYWRhJyxcbiAgICAgICAgY29kZTogJ0NBJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HpicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRTYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ0Euc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcbiAgICAgICAgY29kZTogJ0NDJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HqCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRTgnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ0Muc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNjEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDb25nbyAtIEtpbnNoYXNhJyxcbiAgICAgICAgY29kZTogJ0NEJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HqScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRTknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ0Quc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjQzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJyxcbiAgICAgICAgY29kZTogJ0NGJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HqycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRUInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ0Yuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjM2J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29uZ28gLSBCcmF6emF2aWxsZScsXG4gICAgICAgIGNvZGU6ICdDRycsXG4gICAgICAgIGVtb2ppOiAn8J+HqPCfh6wnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFOCBVKzFGMUVDJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0NHLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzI0MidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N3aXR6ZXJsYW5kJyxcbiAgICAgICAgY29kZTogJ0NIJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HrScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRUQnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ0guc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNDEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDw7R0ZSBk4oCZSXZvaXJlJyxcbiAgICAgICAgY29kZTogJ0NJJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HricsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRUUnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ0kuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjI1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29vayBJc2xhbmRzJyxcbiAgICAgICAgY29kZTogJ0NLJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HsCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRjAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ0suc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNjgyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2hpbGUnLFxuICAgICAgICBjb2RlOiAnQ0wnLFxuICAgICAgICBlbW9qaTogJ/Cfh6jwn4exJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTggVSsxRjFGMScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9DTC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NhbWVyb29uJyxcbiAgICAgICAgY29kZTogJ0NNJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HsicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRjInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ00uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjM3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2hpbmEnLFxuICAgICAgICBjb2RlOiAnQ04nLFxuICAgICAgICBlbW9qaTogJ/Cfh6jwn4ezJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTggVSsxRjFGMycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9DTi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys4NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvbG9tYmlhJyxcbiAgICAgICAgY29kZTogJ0NPJyxcbiAgICAgICAgZW1vamk6ICfwn4eo8J+HtCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU4IFUrMUYxRjQnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvQ08uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDbGlwcGVydG9uIElzbGFuZCcsXG4gICAgICAgIGNvZGU6ICdDUCcsXG4gICAgICAgIGVtb2ppOiAn8J+HqPCfh7UnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFOCBVKzFGMUY1JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0NQLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzU1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29zdGEgUmljYScsXG4gICAgICAgIGNvZGU6ICdDUicsXG4gICAgICAgIGVtb2ppOiAn8J+HqPCfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFOCBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0NSLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzUwNidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0N1YmEnLFxuICAgICAgICBjb2RlOiAnQ1UnLFxuICAgICAgICBlbW9qaTogJ/Cfh6jwn4e6JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTggVSsxRjFGQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9DVS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NhcGUgVmVyZGUnLFxuICAgICAgICBjb2RlOiAnQ1YnLFxuICAgICAgICBlbW9qaTogJ/Cfh6jwn4e7JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTggVSsxRjFGQicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9DVi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMzgnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDdXJhw6dhbycsXG4gICAgICAgIGNvZGU6ICdDVycsXG4gICAgICAgIGVtb2ppOiAn8J+HqPCfh7wnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFOCBVKzFGMUZDJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0NXLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzU5OSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NocmlzdG1hcyBJc2xhbmQnLFxuICAgICAgICBjb2RlOiAnQ1gnLFxuICAgICAgICBlbW9qaTogJ/Cfh6jwn4e9JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTggVSsxRjFGRCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9DWC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2MSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0N5cHJ1cycsXG4gICAgICAgIGNvZGU6ICdDWScsXG4gICAgICAgIGVtb2ppOiAn8J+HqPCfh74nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFOCBVKzFGMUZFJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0NZLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM1NydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0N6ZWNoaWEnLFxuICAgICAgICBjb2RlOiAnQ1onLFxuICAgICAgICBlbW9qaTogJ/Cfh6jwn4e/JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTggVSsxRjFGRicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9DWi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys0MjAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHZXJtYW55JyxcbiAgICAgICAgY29kZTogJ0RFJyxcbiAgICAgICAgZW1vamk6ICfwn4ep8J+HqicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU5IFUrMUYxRUEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvREUuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNDknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdEaWVnbyBHYXJjaWEnLFxuICAgICAgICBjb2RlOiAnREcnLFxuICAgICAgICBlbW9qaTogJ/Cfh6nwn4esJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTkgVSsxRjFFQycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9ERy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNDYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdEamlib3V0aScsXG4gICAgICAgIGNvZGU6ICdESicsXG4gICAgICAgIGVtb2ppOiAn8J+HqfCfh68nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFOSBVKzFGMUVGJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0RKLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzI1MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Rlbm1hcmsnLFxuICAgICAgICBjb2RlOiAnREsnLFxuICAgICAgICBlbW9qaTogJ/Cfh6nwn4ewJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRTkgVSsxRjFGMCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9ESy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys0NSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0RvbWluaWNhJyxcbiAgICAgICAgY29kZTogJ0RNJyxcbiAgICAgICAgZW1vamk6ICfwn4ep8J+HsicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU5IFUrMUYxRjInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvRE0uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMTc2NydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gICAgICAgIGNvZGU6ICdETycsXG4gICAgICAgIGVtb2ppOiAn8J+HqfCfh7QnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFOSBVKzFGMUY0JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0RPLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzE4NDknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBbGdlcmlhJyxcbiAgICAgICAgY29kZTogJ0RaJyxcbiAgICAgICAgZW1vamk6ICfwn4ep8J+HvycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUU5IFUrMUYxRkYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvRFouc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjEzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRWN1YWRvcicsXG4gICAgICAgIGNvZGU6ICdFQycsXG4gICAgICAgIGVtb2ppOiAn8J+HqvCfh6gnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFQSBVKzFGMUU4JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0VDLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzU5MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0VzdG9uaWEnLFxuICAgICAgICBjb2RlOiAnRUUnLFxuICAgICAgICBlbW9qaTogJ/Cfh6rwn4eqJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUEgVSsxRjFFQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9FRS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszNzInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdFZ3lwdCcsXG4gICAgICAgIGNvZGU6ICdFRycsXG4gICAgICAgIGVtb2ppOiAn8J+HqvCfh6wnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFQSBVKzFGMUVDJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0VHLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzIwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnV2VzdGVybiBTYWhhcmEnLFxuICAgICAgICBjb2RlOiAnRUgnLFxuICAgICAgICBlbW9qaTogJ/Cfh6rwn4etJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUEgVSsxRjFFRCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9FSC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMTInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdFcml0cmVhJyxcbiAgICAgICAgY29kZTogJ0VSJyxcbiAgICAgICAgZW1vamk6ICfwn4eq8J+HtycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVBIFUrMUYxRjcnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvRVIuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjkxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU3BhaW4nLFxuICAgICAgICBjb2RlOiAnRVMnLFxuICAgICAgICBlbW9qaTogJ/Cfh6rwn4e4JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUEgVSsxRjFGOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9FUy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszNCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0V0aGlvcGlhJyxcbiAgICAgICAgY29kZTogJ0VUJyxcbiAgICAgICAgZW1vamk6ICfwn4eq8J+HuScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVBIFUrMUYxRjknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvRVQuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjUxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRmlubGFuZCcsXG4gICAgICAgIGNvZGU6ICdGSScsXG4gICAgICAgIGVtb2ppOiAn8J+Hq/Cfh64nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFQiBVKzFGMUVFJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0ZJLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM1OCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0ZpamknLFxuICAgICAgICBjb2RlOiAnRkonLFxuICAgICAgICBlbW9qaTogJ/Cfh6vwn4evJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUIgVSsxRjFFRicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9GSi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2NzknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGYWxrbGFuZCBJc2xhbmRzJyxcbiAgICAgICAgY29kZTogJ0ZLJyxcbiAgICAgICAgZW1vamk6ICfwn4er8J+HsCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVCIFUrMUYxRjAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvRksuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTAwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWljcm9uZXNpYScsXG4gICAgICAgIGNvZGU6ICdGTScsXG4gICAgICAgIGVtb2ppOiAn8J+Hq/Cfh7InLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFQiBVKzFGMUYyJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0ZNLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY5MSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Zhcm9lIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnRk8nLFxuICAgICAgICBlbW9qaTogJ/Cfh6vwn4e0JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUIgVSsxRjFGNCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9GTy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyOTgnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGcmFuY2UnLFxuICAgICAgICBjb2RlOiAnRlInLFxuICAgICAgICBlbW9qaTogJ/Cfh6vwn4e3JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUIgVSsxRjFGNycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9GUi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszMydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dhYm9uJyxcbiAgICAgICAgY29kZTogJ0dBJyxcbiAgICAgICAgZW1vamk6ICfwn4es8J+HpicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVDIFUrMUYxRTYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvR0Euc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjQxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVW5pdGVkIEtpbmdkb20nLFxuICAgICAgICBjb2RlOiAnR0InLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4enJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFFNycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HQi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys0NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZW5hZGEnLFxuICAgICAgICBjb2RlOiAnR0QnLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4epJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFFOScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HRC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxNDczJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR2VvcmdpYScsXG4gICAgICAgIGNvZGU6ICdHRScsXG4gICAgICAgIGVtb2ppOiAn8J+HrPCfh6onLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFQyBVKzFGMUVBJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0dFLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk5NSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0ZyZW5jaCBHdWlhbmEnLFxuICAgICAgICBjb2RlOiAnR0YnLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4erJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFFQicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HRi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1OTQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHdWVybnNleScsXG4gICAgICAgIGNvZGU6ICdHRycsXG4gICAgICAgIGVtb2ppOiAn8J+HrPCfh6wnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFQyBVKzFGMUVDJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0dHLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzQ0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR2hhbmEnLFxuICAgICAgICBjb2RlOiAnR0gnLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4etJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFFRCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HSC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMzMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHaWJyYWx0YXInLFxuICAgICAgICBjb2RlOiAnR0knLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4euJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFFRScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HSS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszNTAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmVlbmxhbmQnLFxuICAgICAgICBjb2RlOiAnR0wnLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4exJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFGMScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HTC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyOTknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHYW1iaWEnLFxuICAgICAgICBjb2RlOiAnR00nLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4eyJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFGMicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HTS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMjAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHdWluZWEnLFxuICAgICAgICBjb2RlOiAnR04nLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4ezJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFGMycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HTi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMjQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHdWFkZWxvdXBlJyxcbiAgICAgICAgY29kZTogJ0dQJyxcbiAgICAgICAgZW1vamk6ICfwn4es8J+HtScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVDIFUrMUYxRjUnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvR1Auc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTkwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRXF1YXRvcmlhbCBHdWluZWEnLFxuICAgICAgICBjb2RlOiAnR1EnLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4e2JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFGNicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HUS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNDAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHcmVlY2UnLFxuICAgICAgICBjb2RlOiAnR1InLFxuICAgICAgICBlbW9qaTogJ/Cfh6zwn4e3JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUMgVSsxRjFGNycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9HUi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszMCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NvdXRoIEdlb3JnaWEgJiBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcbiAgICAgICAgY29kZTogJ0dTJyxcbiAgICAgICAgZW1vamk6ICfwn4es8J+HuCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVDIFUrMUYxRjgnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvR1Muc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTAwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR3VhdGVtYWxhJyxcbiAgICAgICAgY29kZTogJ0dUJyxcbiAgICAgICAgZW1vamk6ICfwn4es8J+HuScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVDIFUrMUYxRjknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvR1Quc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTAyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR3VhbScsXG4gICAgICAgIGNvZGU6ICdHVScsXG4gICAgICAgIGVtb2ppOiAn8J+HrPCfh7onLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFQyBVKzFGMUZBJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0dVLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzE2NzEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdHdWluZWEtQmlzc2F1JyxcbiAgICAgICAgY29kZTogJ0dXJyxcbiAgICAgICAgZW1vamk6ICfwn4es8J+HvCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVDIFUrMUYxRkMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvR1cuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjQ1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnR3V5YW5hJyxcbiAgICAgICAgY29kZTogJ0dZJyxcbiAgICAgICAgZW1vamk6ICfwn4es8J+HvicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVDIFUrMUYxRkUnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvR1kuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTk1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSG9uZyBLb25nIFNBUiBDaGluYScsXG4gICAgICAgIGNvZGU6ICdISycsXG4gICAgICAgIGVtb2ppOiAn8J+HrfCfh7AnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFRCBVKzFGMUYwJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0hLLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzg1MidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0hvbmR1cmFzJyxcbiAgICAgICAgY29kZTogJ0hOJyxcbiAgICAgICAgZW1vamk6ICfwn4et8J+HsycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVEIFUrMUYxRjMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSE4uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTA0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ3JvYXRpYScsXG4gICAgICAgIGNvZGU6ICdIUicsXG4gICAgICAgIGVtb2ppOiAn8J+HrfCfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFRCBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0hSLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM4NSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0hhaXRpJyxcbiAgICAgICAgY29kZTogJ0hUJyxcbiAgICAgICAgZW1vamk6ICfwn4et8J+HuScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVEIFUrMUYxRjknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSFQuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTA5J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSHVuZ2FyeScsXG4gICAgICAgIGNvZGU6ICdIVScsXG4gICAgICAgIGVtb2ppOiAn8J+HrfCfh7onLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFRCBVKzFGMUZBJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0hVLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM2J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSW5kb25lc2lhJyxcbiAgICAgICAgY29kZTogJ0lEJyxcbiAgICAgICAgZW1vamk6ICfwn4eu8J+HqScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVFIFUrMUYxRTknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSUQuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNjInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdJcmVsYW5kJyxcbiAgICAgICAgY29kZTogJ0lFJyxcbiAgICAgICAgZW1vamk6ICfwn4eu8J+HqicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVFIFUrMUYxRUEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSUUuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzUzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSXNyYWVsJyxcbiAgICAgICAgY29kZTogJ0lMJyxcbiAgICAgICAgZW1vamk6ICfwn4eu8J+HsScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVFIFUrMUYxRjEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSUwuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTcyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSXNsZSBvZiBNYW4nLFxuICAgICAgICBjb2RlOiAnSU0nLFxuICAgICAgICBlbW9qaTogJ/Cfh67wn4eyJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUUgVSsxRjFGMicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9JTS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys0NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0luZGlhJyxcbiAgICAgICAgY29kZTogJ0lOJyxcbiAgICAgICAgZW1vamk6ICfwn4eu8J+HsycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVFIFUrMUYxRjMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSU4uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxuICAgICAgICBjb2RlOiAnSU8nLFxuICAgICAgICBlbW9qaTogJ/Cfh67wn4e0JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUUgVSsxRjFGNCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9JTy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNDYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdJcmFxJyxcbiAgICAgICAgY29kZTogJ0lRJyxcbiAgICAgICAgZW1vamk6ICfwn4eu8J+HticsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVFIFUrMUYxRjYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSVEuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTY0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSXJhbicsXG4gICAgICAgIGNvZGU6ICdJUicsXG4gICAgICAgIGVtb2ppOiAn8J+HrvCfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFRSBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0lSLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSWNlbGFuZCcsXG4gICAgICAgIGNvZGU6ICdJUycsXG4gICAgICAgIGVtb2ppOiAn8J+HrvCfh7gnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFFRSBVKzFGMUY4JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0lTLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM1NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0l0YWx5JyxcbiAgICAgICAgY29kZTogJ0lUJyxcbiAgICAgICAgZW1vamk6ICfwn4eu8J+HuScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVFIFUrMUYxRjknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSVQuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdKZXJzZXknLFxuICAgICAgICBjb2RlOiAnSkUnLFxuICAgICAgICBlbW9qaTogJ/Cfh6/wn4eqJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUYgVSsxRjFFQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9KRS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys0NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0phbWFpY2EnLFxuICAgICAgICBjb2RlOiAnSk0nLFxuICAgICAgICBlbW9qaTogJ/Cfh6/wn4eyJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUYgVSsxRjFGMicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9KTS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxODc2J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSm9yZGFuJyxcbiAgICAgICAgY29kZTogJ0pPJyxcbiAgICAgICAgZW1vamk6ICfwn4ev8J+HtCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUVGIFUrMUYxRjQnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvSk8uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTYyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSmFwYW4nLFxuICAgICAgICBjb2RlOiAnSlAnLFxuICAgICAgICBlbW9qaTogJ/Cfh6/wn4e1JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRUYgVSsxRjFGNScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9KUC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys4MSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0tlbnlhJyxcbiAgICAgICAgY29kZTogJ0tFJyxcbiAgICAgICAgZW1vamk6ICfwn4ew8J+HqicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYwIFUrMUYxRUEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvS0Uuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjU0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnS3lyZ3l6c3RhbicsXG4gICAgICAgIGNvZGU6ICdLRycsXG4gICAgICAgIGVtb2ppOiAn8J+HsPCfh6wnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMCBVKzFGMUVDJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0tHLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk5NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NhbWJvZGlhJyxcbiAgICAgICAgY29kZTogJ0tIJyxcbiAgICAgICAgZW1vamk6ICfwn4ew8J+HrScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYwIFUrMUYxRUQnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvS0guc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrODU1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnS2lyaWJhdGknLFxuICAgICAgICBjb2RlOiAnS0knLFxuICAgICAgICBlbW9qaTogJ/Cfh7Dwn4euJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjAgVSsxRjFFRScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9LSS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2ODYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDb21vcm9zJyxcbiAgICAgICAgY29kZTogJ0tNJyxcbiAgICAgICAgZW1vamk6ICfwn4ew8J+HsicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYwIFUrMUYxRjInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvS00uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjY5J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU3QuIEtpdHRzICYgTmV2aXMnLFxuICAgICAgICBjb2RlOiAnS04nLFxuICAgICAgICBlbW9qaTogJ/Cfh7Dwn4ezJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjAgVSsxRjFGMycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9LTi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxODY5J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTm9ydGggS29yZWEnLFxuICAgICAgICBjb2RlOiAnS1AnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Dwn4e1JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjAgVSsxRjFGNScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9LUC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys4NTAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTb3V0aCBLb3JlYScsXG4gICAgICAgIGNvZGU6ICdLUicsXG4gICAgICAgIGVtb2ppOiAn8J+HsPCfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMCBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0tSLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzgyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnS3V3YWl0JyxcbiAgICAgICAgY29kZTogJ0tXJyxcbiAgICAgICAgZW1vamk6ICfwn4ew8J+HvCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYwIFUrMUYxRkMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvS1cuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTY1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2F5bWFuIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnS1knLFxuICAgICAgICBlbW9qaTogJ/Cfh7Dwn4e+JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjAgVSsxRjFGRScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9LWS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysgMzQ1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnS2F6YWtoc3RhbicsXG4gICAgICAgIGNvZGU6ICdLWicsXG4gICAgICAgIGVtb2ppOiAn8J+HsPCfh78nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMCBVKzFGMUZGJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0taLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzc3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTGFvcycsXG4gICAgICAgIGNvZGU6ICdMQScsXG4gICAgICAgIGVtb2ppOiAn8J+HsfCfh6YnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMSBVKzFGMUU2JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0xBLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzg1NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0xlYmFub24nLFxuICAgICAgICBjb2RlOiAnTEInLFxuICAgICAgICBlbW9qaTogJ/Cfh7Hwn4enJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjEgVSsxRjFFNycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9MQi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys5NjEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTdC4gTHVjaWEnLFxuICAgICAgICBjb2RlOiAnTEMnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Hwn4eoJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjEgVSsxRjFFOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9MQy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxNzU4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTGllY2h0ZW5zdGVpbicsXG4gICAgICAgIGNvZGU6ICdMSScsXG4gICAgICAgIGVtb2ppOiAn8J+HsfCfh64nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMSBVKzFGMUVFJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0xJLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzQyMydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NyaSBMYW5rYScsXG4gICAgICAgIGNvZGU6ICdMSycsXG4gICAgICAgIGVtb2ppOiAn8J+HsfCfh7AnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMSBVKzFGMUYwJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0xLLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTGliZXJpYScsXG4gICAgICAgIGNvZGU6ICdMUicsXG4gICAgICAgIGVtb2ppOiAn8J+HsfCfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMSBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL0xSLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzIzMSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0xlc290aG8nLFxuICAgICAgICBjb2RlOiAnTFMnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Hwn4e4JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjEgVSsxRjFGOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9MUy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNjYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdMaXRodWFuaWEnLFxuICAgICAgICBjb2RlOiAnTFQnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Hwn4e5JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjEgVSsxRjFGOScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9MVC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszNzAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdMdXhlbWJvdXJnJyxcbiAgICAgICAgY29kZTogJ0xVJyxcbiAgICAgICAgZW1vamk6ICfwn4ex8J+HuicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYxIFUrMUYxRkEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTFUuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzUyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTGF0dmlhJyxcbiAgICAgICAgY29kZTogJ0xWJyxcbiAgICAgICAgZW1vamk6ICfwn4ex8J+HuycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYxIFUrMUYxRkInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTFYuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzcxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTGlieWEnLFxuICAgICAgICBjb2RlOiAnTFknLFxuICAgICAgICBlbW9qaTogJ/Cfh7Hwn4e+JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjEgVSsxRjFGRScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9MWS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMTgnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNb3JvY2NvJyxcbiAgICAgICAgY29kZTogJ01BJyxcbiAgICAgICAgZW1vamk6ICfwn4ey8J+HpicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYyIFUrMUYxRTYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTUEuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjEyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTW9uYWNvJyxcbiAgICAgICAgY29kZTogJ01DJyxcbiAgICAgICAgZW1vamk6ICfwn4ey8J+HqCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYyIFUrMUYxRTgnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTUMuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzc3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTW9sZG92YScsXG4gICAgICAgIGNvZGU6ICdNRCcsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh6knLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUU5JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01ELnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM3MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01vbnRlbmVncm8nLFxuICAgICAgICBjb2RlOiAnTUUnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Lwn4eqJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjIgVSsxRjFFQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9NRS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszODInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTdC4gTWFydGluJyxcbiAgICAgICAgY29kZTogJ01GJyxcbiAgICAgICAgZW1vamk6ICfwn4ey8J+HqycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYyIFUrMUYxRUInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTUYuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTkwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWFkYWdhc2NhcicsXG4gICAgICAgIGNvZGU6ICdNRycsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh6wnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUVDJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01HLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzI2MSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnTUgnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Lwn4etJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjIgVSsxRjFFRCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9NSC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2OTInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdOb3J0aCBNYWNlZG9uaWEnLFxuICAgICAgICBjb2RlOiAnTUsnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Lwn4ewJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjIgVSsxRjFGMCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9NSy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszODknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNYWxpJyxcbiAgICAgICAgY29kZTogJ01MJyxcbiAgICAgICAgZW1vamk6ICfwn4ey8J+HsScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYyIFUrMUYxRjEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTUwuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjIzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTXlhbm1hciAoQnVybWEpJyxcbiAgICAgICAgY29kZTogJ01NJyxcbiAgICAgICAgZW1vamk6ICfwn4ey8J+HsicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYyIFUrMUYxRjInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTU0uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNb25nb2xpYScsXG4gICAgICAgIGNvZGU6ICdNTicsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh7MnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUYzJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01OLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk3NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01hY2FvIFNBUiBDaGluYScsXG4gICAgICAgIGNvZGU6ICdNTycsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh7QnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUY0JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01PLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzg1MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXG4gICAgICAgIGNvZGU6ICdNUCcsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh7UnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUY1JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01QLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzE2NzAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNYXJ0aW5pcXVlJyxcbiAgICAgICAgY29kZTogJ01RJyxcbiAgICAgICAgZW1vamk6ICfwn4ey8J+HticsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYyIFUrMUYxRjYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTVEuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTk2J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWF1cml0YW5pYScsXG4gICAgICAgIGNvZGU6ICdNUicsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01SLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzIyMidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01vbnRzZXJyYXQnLFxuICAgICAgICBjb2RlOiAnTVMnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Lwn4e4JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjIgVSsxRjFGOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9NUy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxNjY0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWFsdGEnLFxuICAgICAgICBjb2RlOiAnTVQnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Lwn4e5JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjIgVSsxRjFGOScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9NVC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszNTYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNYXVyaXRpdXMnLFxuICAgICAgICBjb2RlOiAnTVUnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Lwn4e6JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjIgVSsxRjFGQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9NVS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMzAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNYWxkaXZlcycsXG4gICAgICAgIGNvZGU6ICdNVicsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh7snLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUZCJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01WLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk2MCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01hbGF3aScsXG4gICAgICAgIGNvZGU6ICdNVycsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh7wnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUZDJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01XLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzI2NSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01leGljbycsXG4gICAgICAgIGNvZGU6ICdNWCcsXG4gICAgICAgIGVtb2ppOiAn8J+HsvCfh70nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMiBVKzFGMUZEJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL01YLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzUyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTWFsYXlzaWEnLFxuICAgICAgICBjb2RlOiAnTVknLFxuICAgICAgICBlbW9qaTogJ/Cfh7Lwn4e+JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjIgVSsxRjFGRScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9NWS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2MCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01vemFtYmlxdWUnLFxuICAgICAgICBjb2RlOiAnTVonLFxuICAgICAgICBlbW9qaTogJ/Cfh7Lwn4e/JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjIgVSsxRjFGRicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9NWi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNTgnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdOYW1pYmlhJyxcbiAgICAgICAgY29kZTogJ05BJyxcbiAgICAgICAgZW1vamk6ICfwn4ez8J+HpicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYzIFUrMUYxRTYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTkEuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjY0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTmV3IENhbGVkb25pYScsXG4gICAgICAgIGNvZGU6ICdOQycsXG4gICAgICAgIGVtb2ppOiAn8J+Hs/Cfh6gnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMyBVKzFGMUU4JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL05DLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY4NydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ05pZ2VyJyxcbiAgICAgICAgY29kZTogJ05FJyxcbiAgICAgICAgZW1vamk6ICfwn4ez8J+HqicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYzIFUrMUYxRUEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTkUuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjI3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTm9yZm9sayBJc2xhbmQnLFxuICAgICAgICBjb2RlOiAnTkYnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Pwn4erJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjMgVSsxRjFFQicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9ORi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2NzInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdOaWdlcmlhJyxcbiAgICAgICAgY29kZTogJ05HJyxcbiAgICAgICAgZW1vamk6ICfwn4ez8J+HrCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYzIFUrMUYxRUMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTkcuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjM0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTmljYXJhZ3VhJyxcbiAgICAgICAgY29kZTogJ05JJyxcbiAgICAgICAgZW1vamk6ICfwn4ez8J+HricsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUYzIFUrMUYxRUUnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvTkkuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTA1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTmV0aGVybGFuZHMnLFxuICAgICAgICBjb2RlOiAnTkwnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Pwn4exJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjMgVSsxRjFGMScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9OTC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszMSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ05vcndheScsXG4gICAgICAgIGNvZGU6ICdOTycsXG4gICAgICAgIGVtb2ppOiAn8J+Hs/Cfh7QnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMyBVKzFGMUY0JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL05PLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzQ3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTmVwYWwnLFxuICAgICAgICBjb2RlOiAnTlAnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Pwn4e1JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjMgVSsxRjFGNScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9OUC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys5NzcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdOYXVydScsXG4gICAgICAgIGNvZGU6ICdOUicsXG4gICAgICAgIGVtb2ppOiAn8J+Hs/Cfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMyBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL05SLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY3NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ05pdWUnLFxuICAgICAgICBjb2RlOiAnTlUnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Pwn4e6JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjMgVSsxRjFGQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9OVS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2ODMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdOZXcgWmVhbGFuZCcsXG4gICAgICAgIGNvZGU6ICdOWicsXG4gICAgICAgIGVtb2ppOiAn8J+Hs/Cfh78nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGMyBVKzFGMUZGJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL05aLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnT21hbicsXG4gICAgICAgIGNvZGU6ICdPTScsXG4gICAgICAgIGVtb2ppOiAn8J+HtPCfh7InLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGNCBVKzFGMUYyJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL09NLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk2OCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1BhbmFtYScsXG4gICAgICAgIGNvZGU6ICdQQScsXG4gICAgICAgIGVtb2ppOiAn8J+HtfCfh6YnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGNSBVKzFGMUU2JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1BBLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzUwNydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1BlcnUnLFxuICAgICAgICBjb2RlOiAnUEUnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Xwn4eqJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjUgVSsxRjFFQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9QRS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1MSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0ZyZW5jaCBQb2x5bmVzaWEnLFxuICAgICAgICBjb2RlOiAnUEYnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Xwn4erJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjUgVSsxRjFFQicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9QRi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2ODknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICAgICAgY29kZTogJ1BHJyxcbiAgICAgICAgZW1vamk6ICfwn4e18J+HrCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY1IFUrMUYxRUMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvUEcuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNjc1J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUGhpbGlwcGluZXMnLFxuICAgICAgICBjb2RlOiAnUEgnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Xwn4etJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjUgVSsxRjFFRCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9QSC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1Bha2lzdGFuJyxcbiAgICAgICAgY29kZTogJ1BLJyxcbiAgICAgICAgZW1vamk6ICfwn4e18J+HsCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY1IFUrMUYxRjAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvUEsuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQb2xhbmQnLFxuICAgICAgICBjb2RlOiAnUEwnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Xwn4exJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjUgVSsxRjFGMScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9QTC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys0OCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N0LiBQaWVycmUgJiBNaXF1ZWxvbicsXG4gICAgICAgIGNvZGU6ICdQTScsXG4gICAgICAgIGVtb2ppOiAn8J+HtfCfh7InLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGNSBVKzFGMUYyJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1BNLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzUwOCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1BpdGNhaXJuIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnUE4nLFxuICAgICAgICBlbW9qaTogJ/Cfh7Xwn4ezJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjUgVSsxRjFGMycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9QTi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys4NzInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQdWVydG8gUmljbycsXG4gICAgICAgIGNvZGU6ICdQUicsXG4gICAgICAgIGVtb2ppOiAn8J+HtfCfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGNSBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1BSLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzE5MzknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQYWxlc3RpbmlhbiBUZXJyaXRvcmllcycsXG4gICAgICAgIGNvZGU6ICdQUycsXG4gICAgICAgIGVtb2ppOiAn8J+HtfCfh7gnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGNSBVKzFGMUY4JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1BTLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk3MCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1BvcnR1Z2FsJyxcbiAgICAgICAgY29kZTogJ1BUJyxcbiAgICAgICAgZW1vamk6ICfwn4e18J+HuScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY1IFUrMUYxRjknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvUFQuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzUxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUGFsYXUnLFxuICAgICAgICBjb2RlOiAnUFcnLFxuICAgICAgICBlbW9qaTogJ/Cfh7Xwn4e8JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjUgVSsxRjFGQycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9QVy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2ODAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQYXJhZ3VheScsXG4gICAgICAgIGNvZGU6ICdQWScsXG4gICAgICAgIGVtb2ppOiAn8J+HtfCfh74nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGNSBVKzFGMUZFJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1BZLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzU5NSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1FhdGFyJyxcbiAgICAgICAgY29kZTogJ1FBJyxcbiAgICAgICAgZW1vamk6ICfwn4e28J+HpicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY2IFUrMUYxRTYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvUUEuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTc0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUsOpdW5pb24nLFxuICAgICAgICBjb2RlOiAnUkUnLFxuICAgICAgICBlbW9qaTogJ/Cfh7fwn4eqJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjcgVSsxRjFFQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9SRS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNjInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSb21hbmlhJyxcbiAgICAgICAgY29kZTogJ1JPJyxcbiAgICAgICAgZW1vamk6ICfwn4e38J+HtCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY3IFUrMUYxRjQnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvUk8uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNDAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTZXJiaWEnLFxuICAgICAgICBjb2RlOiAnUlMnLFxuICAgICAgICBlbW9qaTogJ/Cfh7fwn4e4JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjcgVSsxRjFGOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9SUy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszODEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSdXNzaWEnLFxuICAgICAgICBjb2RlOiAnUlUnLFxuICAgICAgICBlbW9qaTogJ/Cfh7fwn4e6JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjcgVSsxRjFGQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9SVS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUndhbmRhJyxcbiAgICAgICAgY29kZTogJ1JXJyxcbiAgICAgICAgZW1vamk6ICfwn4e38J+HvCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY3IFUrMUYxRkMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvUlcuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjUwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU2F1ZGkgQXJhYmlhJyxcbiAgICAgICAgY29kZTogJ1NBJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HpicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRTYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU0Euc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrOTY2J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU29sb21vbiBJc2xhbmRzJyxcbiAgICAgICAgY29kZTogJ1NCJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HpycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRTcnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU0Iuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNjc3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU2V5Y2hlbGxlcycsXG4gICAgICAgIGNvZGU6ICdTQycsXG4gICAgICAgIGVtb2ppOiAn8J+HuPCfh6gnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOCBVKzFGMUU4JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1NDLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzI0OCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N1ZGFuJyxcbiAgICAgICAgY29kZTogJ1NEJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HqScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRTknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU0Quc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjQ5J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU3dlZGVuJyxcbiAgICAgICAgY29kZTogJ1NFJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HqicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRUEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU0Uuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNDYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTaW5nYXBvcmUnLFxuICAgICAgICBjb2RlOiAnU0cnLFxuICAgICAgICBlbW9qaTogJ/Cfh7jwn4esJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjggVSsxRjFFQycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9TRy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2NSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N0LiBIZWxlbmEnLFxuICAgICAgICBjb2RlOiAnU0gnLFxuICAgICAgICBlbW9qaTogJ/Cfh7jwn4etJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjggVSsxRjFFRCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9TSC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyOTAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTbG92ZW5pYScsXG4gICAgICAgIGNvZGU6ICdTSScsXG4gICAgICAgIGVtb2ppOiAn8J+HuPCfh64nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOCBVKzFGMUVFJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1NJLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM4NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N2YWxiYXJkICYgSmFuIE1heWVuJyxcbiAgICAgICAgY29kZTogJ1NKJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HrycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRUYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU0ouc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNDcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTbG92YWtpYScsXG4gICAgICAgIGNvZGU6ICdTSycsXG4gICAgICAgIGVtb2ppOiAn8J+HuPCfh7AnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOCBVKzFGMUYwJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1NLLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzQyMSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NpZXJyYSBMZW9uZScsXG4gICAgICAgIGNvZGU6ICdTTCcsXG4gICAgICAgIGVtb2ppOiAn8J+HuPCfh7EnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOCBVKzFGMUYxJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1NMLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzIzMidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NhbiBNYXJpbm8nLFxuICAgICAgICBjb2RlOiAnU00nLFxuICAgICAgICBlbW9qaTogJ/Cfh7jwn4eyJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjggVSsxRjFGMicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9TTS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszNzgnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTZW5lZ2FsJyxcbiAgICAgICAgY29kZTogJ1NOJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HsycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRjMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU04uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjIxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU29tYWxpYScsXG4gICAgICAgIGNvZGU6ICdTTycsXG4gICAgICAgIGVtb2ppOiAn8J+HuPCfh7QnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOCBVKzFGMUY0JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1NPLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzI1MidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N1cmluYW1lJyxcbiAgICAgICAgY29kZTogJ1NSJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HtycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRjcnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU1Iuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTk3J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU291dGggU3VkYW4nLFxuICAgICAgICBjb2RlOiAnU1MnLFxuICAgICAgICBlbW9qaTogJ/Cfh7jwn4e4JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjggVSsxRjFGOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9TUy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMTEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTw6NvIFRvbcOpICYgUHLDrW5jaXBlJyxcbiAgICAgICAgY29kZTogJ1NUJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HuScsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRjknLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU1Quc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjM5J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRWwgU2FsdmFkb3InLFxuICAgICAgICBjb2RlOiAnU1YnLFxuICAgICAgICBlbW9qaTogJ/Cfh7jwn4e7JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjggVSsxRjFGQicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9TVi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1MDMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTaW50IE1hYXJ0ZW4nLFxuICAgICAgICBjb2RlOiAnU1gnLFxuICAgICAgICBlbW9qaTogJ/Cfh7jwn4e9JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjggVSsxRjFGRCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9TWC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys3MjEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTeXJpYScsXG4gICAgICAgIGNvZGU6ICdTWScsXG4gICAgICAgIGVtb2ppOiAn8J+HuPCfh74nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOCBVKzFGMUZFJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1NZLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk2MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Vzd2F0aW5pJyxcbiAgICAgICAgY29kZTogJ1NaJyxcbiAgICAgICAgZW1vamk6ICfwn4e48J+HvycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY4IFUrMUYxRkYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU1ouc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjY4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVHJpc3RhbiBkYSBDdW5oYScsXG4gICAgICAgIGNvZGU6ICdUQScsXG4gICAgICAgIGVtb2ppOiAn8J+HufCfh6YnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOSBVKzFGMUU2JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1RBLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzI5MCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1R1cmtzICYgQ2FpY29zIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnVEMnLFxuICAgICAgICBlbW9qaTogJ/Cfh7nwn4eoJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjkgVSsxRjFFOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9UQy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxNjQ5J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2hhZCcsXG4gICAgICAgIGNvZGU6ICdURCcsXG4gICAgICAgIGVtb2ppOiAn8J+HufCfh6knLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOSBVKzFGMUU5JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1RELnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzIzNSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1RvZ28nLFxuICAgICAgICBjb2RlOiAnVEcnLFxuICAgICAgICBlbW9qaTogJ/Cfh7nwn4esJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjkgVSsxRjFFQycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9URy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMjgnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaGFpbGFuZCcsXG4gICAgICAgIGNvZGU6ICdUSCcsXG4gICAgICAgIGVtb2ppOiAn8J+HufCfh60nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOSBVKzFGMUVEJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1RILnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY2J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGFqaWtpc3RhbicsXG4gICAgICAgIGNvZGU6ICdUSicsXG4gICAgICAgIGVtb2ppOiAn8J+HufCfh68nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOSBVKzFGMUVGJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1RKLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk5MidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1Rva2VsYXUnLFxuICAgICAgICBjb2RlOiAnVEsnLFxuICAgICAgICBlbW9qaTogJ/Cfh7nwn4ewJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjkgVSsxRjFGMCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9USy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2OTAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUaW1vci1MZXN0ZScsXG4gICAgICAgIGNvZGU6ICdUTCcsXG4gICAgICAgIGVtb2ppOiAn8J+HufCfh7EnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOSBVKzFGMUYxJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1RMLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY3MCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1R1cmttZW5pc3RhbicsXG4gICAgICAgIGNvZGU6ICdUTScsXG4gICAgICAgIGVtb2ppOiAn8J+HufCfh7InLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOSBVKzFGMUYyJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1RNLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk5MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1R1bmlzaWEnLFxuICAgICAgICBjb2RlOiAnVE4nLFxuICAgICAgICBlbW9qaTogJ/Cfh7nwn4ezJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjkgVSsxRjFGMycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9UTi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyMTYnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUb25nYScsXG4gICAgICAgIGNvZGU6ICdUTycsXG4gICAgICAgIGVtb2ppOiAn8J+HufCfh7QnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOSBVKzFGMUY0JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1RPLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzY3NidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1R1cmtleScsXG4gICAgICAgIGNvZGU6ICdUUicsXG4gICAgICAgIGVtb2ppOiAn8J+HufCfh7cnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGOSBVKzFGMUY3JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1RSLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzkwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVHJpbmlkYWQgJiBUb2JhZ28nLFxuICAgICAgICBjb2RlOiAnVFQnLFxuICAgICAgICBlbW9qaTogJ/Cfh7nwn4e5JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjkgVSsxRjFGOScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9UVC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxODY4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVHV2YWx1JyxcbiAgICAgICAgY29kZTogJ1RWJyxcbiAgICAgICAgZW1vamk6ICfwn4e58J+HuycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY5IFUrMUYxRkInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvVFYuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNjg4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGFpd2FuJyxcbiAgICAgICAgY29kZTogJ1RXJyxcbiAgICAgICAgZW1vamk6ICfwn4e58J+HvCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUY5IFUrMUYxRkMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvVFcuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrODg2J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVGFuemFuaWEnLFxuICAgICAgICBjb2RlOiAnVFonLFxuICAgICAgICBlbW9qaTogJ/Cfh7nwn4e/JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRjkgVSsxRjFGRicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9UWi5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNTUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdVa3JhaW5lJyxcbiAgICAgICAgY29kZTogJ1VBJyxcbiAgICAgICAgZW1vamk6ICfwn4e68J+HpicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUZBIFUrMUYxRTYnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvVUEuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMzgwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVWdhbmRhJyxcbiAgICAgICAgY29kZTogJ1VHJyxcbiAgICAgICAgZW1vamk6ICfwn4e68J+HrCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUZBIFUrMUYxRUMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvVUcuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjU2J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgIGNvZGU6ICdVUycsXG4gICAgICAgIGVtb2ppOiAn8J+HuvCfh7gnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGQSBVKzFGMUY4JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1VTLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdVcnVndWF5JyxcbiAgICAgICAgY29kZTogJ1VZJyxcbiAgICAgICAgZW1vamk6ICfwn4e68J+HvicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUZBIFUrMUYxRkUnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvVVkuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNTk4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVXpiZWtpc3RhbicsXG4gICAgICAgIGNvZGU6ICdVWicsXG4gICAgICAgIGVtb2ppOiAn8J+HuvCfh78nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGQSBVKzFGMUZGJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1VaLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk5OCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1ZhdGljYW4gQ2l0eScsXG4gICAgICAgIGNvZGU6ICdWQScsXG4gICAgICAgIGVtb2ppOiAn8J+Hu/Cfh6YnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGQiBVKzFGMUU2JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1ZBLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzM3OSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N0LiBWaW5jZW50ICYgR3JlbmFkaW5lcycsXG4gICAgICAgIGNvZGU6ICdWQycsXG4gICAgICAgIGVtb2ppOiAn8J+Hu/Cfh6gnLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGQiBVKzFGMUU4JyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1ZDLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzE3ODQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdWZW5lenVlbGEnLFxuICAgICAgICBjb2RlOiAnVkUnLFxuICAgICAgICBlbW9qaTogJ/Cfh7vwn4eqJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRkIgVSsxRjFFQScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9WRS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys1OCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JyaXRpc2ggVmlyZ2luIElzbGFuZHMnLFxuICAgICAgICBjb2RlOiAnVkcnLFxuICAgICAgICBlbW9qaTogJ/Cfh7vwn4esJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRkIgVSsxRjFFQycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9WRy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysxMjg0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVS5TLiBWaXJnaW4gSXNsYW5kcycsXG4gICAgICAgIGNvZGU6ICdWSScsXG4gICAgICAgIGVtb2ppOiAn8J+Hu/Cfh64nLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGQiBVKzFGMUVFJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1ZJLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzEzNDAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdWaWV0bmFtJyxcbiAgICAgICAgY29kZTogJ1ZOJyxcbiAgICAgICAgZW1vamk6ICfwn4e78J+HsycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUZCIFUrMUYxRjMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvVk4uc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrODQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdWYW51YXR1JyxcbiAgICAgICAgY29kZTogJ1ZVJyxcbiAgICAgICAgZW1vamk6ICfwn4e78J+HuicsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUZCIFUrMUYxRkEnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvVlUuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNjc4J1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnV2FsbGlzICYgRnV0dW5hJyxcbiAgICAgICAgY29kZTogJ1dGJyxcbiAgICAgICAgZW1vamk6ICfwn4e88J+HqycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUZDIFUrMUYxRUInLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvV0Yuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNjgxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU2Ftb2EnLFxuICAgICAgICBjb2RlOiAnV1MnLFxuICAgICAgICBlbW9qaTogJ/Cfh7zwn4e4JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRkMgVSsxRjFGOCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9XUy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys2ODUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdLb3Nvdm8nLFxuICAgICAgICBjb2RlOiAnWEsnLFxuICAgICAgICBlbW9qaTogJ/Cfh73wn4ewJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRkQgVSsxRjFGMCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9YSy5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJyszODMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdZZW1lbicsXG4gICAgICAgIGNvZGU6ICdZRScsXG4gICAgICAgIGVtb2ppOiAn8J+HvvCfh6onLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGRSBVKzFGMUVBJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1lFLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzk2NydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01heW90dGUnLFxuICAgICAgICBjb2RlOiAnWVQnLFxuICAgICAgICBlbW9qaTogJ/Cfh77wn4e5JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRkUgVSsxRjFGOScsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9ZVC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNjInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTb3V0aCBBZnJpY2EnLFxuICAgICAgICBjb2RlOiAnWkEnLFxuICAgICAgICBlbW9qaTogJ/Cfh7/wn4emJyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYxRkYgVSsxRjFFNicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb3VudHJ5LWZsYWctZW1vamktanNvbkAyLjAuMC9kaXN0L2ltYWdlcy9aQS5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJysyNydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1phbWJpYScsXG4gICAgICAgIGNvZGU6ICdaTScsXG4gICAgICAgIGVtb2ppOiAn8J+Hv/Cfh7InLFxuICAgICAgICB1bmljb2RlOiAnVSsxRjFGRiBVKzFGMUYyJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1pNLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzI2MCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1ppbWJhYndlJyxcbiAgICAgICAgY29kZTogJ1pXJyxcbiAgICAgICAgZW1vamk6ICfwn4e/8J+HvCcsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGMUZGIFUrMUYxRkMnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvWlcuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrMjYzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRW5nbGFuZCcsXG4gICAgICAgIGNvZGU6ICdFTkdMQU5EJyxcbiAgICAgICAgZW1vamk6ICfwn4+086CBp/OggaLzoIGl86CBrvOggafzoIG/JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYzRjQgVStFMDA2NyBVK0UwMDYyIFUrRTAwNjUgVStFMDA2RSBVK0UwMDY3IFUrRTAwN0YnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvRU5HTEFORC5zdmcnLFxuICAgICAgICBjb3VudHJ5Q29kZTogJys0NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1Njb3RsYW5kJyxcbiAgICAgICAgY29kZTogJ1NDT1RMQU5EJyxcbiAgICAgICAgZW1vamk6ICfwn4+086CBp/OggaLzoIGz86CBo/OggbTzoIG/JyxcbiAgICAgICAgdW5pY29kZTogJ1UrMUYzRjQgVStFMDA2NyBVK0UwMDYyIFUrRTAwNzMgVStFMDA2MyBVK0UwMDc0IFUrRTAwN0YnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vY291bnRyeS1mbGFnLWVtb2ppLWpzb25AMi4wLjAvZGlzdC9pbWFnZXMvU0NPVExBTkQuc3ZnJyxcbiAgICAgICAgY291bnRyeUNvZGU6ICcrNDQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdXYWxlcycsXG4gICAgICAgIGNvZGU6ICdXQUxFUycsXG4gICAgICAgIGVtb2ppOiAn8J+PtPOggafzoIGi86CBt/OggazzoIGz86CBvycsXG4gICAgICAgIHVuaWNvZGU6ICdVKzFGM0Y0IFUrRTAwNjcgVStFMDA2MiBVK0UwMDc3IFUrRTAwNkMgVStFMDA3MyBVK0UwMDdGJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2NvdW50cnktZmxhZy1lbW9qaS1qc29uQDIuMC4wL2Rpc3QvaW1hZ2VzL1dBTEVTLnN2ZycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnKzQ0J1xuICAgIH0qL1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRyaWVzO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtZm9ybSByZWY9XCJmb3JtUmVmXCIgZ3JlZWR5PlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtbnYtbGlnaHQtdGVydGlhcnkgcS1tdC1ub25lIHEtbWItc20gZmxleCBmbGV4LWlubGluZSBpdGVtcy1jZW50ZXIgZnMtMTQganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyAkdCgnZmllbGRzLmVtYWlsJykgfX0gb1xuICAgICAgICAgICAgICAgIHt7ICR0KCdmaWVsZHMucGhvbmVOdW1iZXInKSB9fVxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZVZhbGlkYXRlKClcIlxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJ3aWR0aCA+IDQ0NFwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImB0ZXh0LW52LSR7R2V0U3VmZml4KFxuICAgICAgICAgICAgICAgICAgICAnYWNjZW50J1xuICAgICAgICAgICAgICAgICl9IHRleHQtbWVkaXVtIGxzLTIgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGUgPyAnZnMtMTAnIDogJ2ZzLTEyJ1xuICAgICAgICAgICAgICAgIH1gXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luRm9ybS5tb2RlID09PSAnZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkdCgnZmllbGRzLnBob25lTnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICR0KCdmaWVsZHMuZW1haWwnKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEuNmVtXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVmFsaWRhdGUoKVwiXG4gICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImBudi0ke0dldFN1ZmZpeCgnYWNjZW50Jyl9YFwiXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cIndpZHRoIDw9IDQ0NFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tci1zbVwiXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibG9naW5Gb3JtLm1vZGUgPT09ICdlbWFpbCcgPyAnc21hcnRwaG9uZScgOiAnbWFpbCdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJsb2dpbkZvcm0uZW1haWxPclBob25lXCJcbiAgICAgICAgICAgICAgICA6Y29sb3I9XCIndHJhbnNwYXJlbnQnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImxvZ2luRm9ybS5tb2RlICA9PT0gJ2VtYWlsJyA/ICdtb25leUBxb3JpcGF5LmNvbScgOiAnNDI0MDAwMDAwMCdcIlxuICAgICAgICAgICAgICAgIDppbnB1dG1vZGU9XCJsb2dpbkZvcm0ubW9kZSAgPT09ICdwaG9uZScgPyAnbnVtZXJpYycgOiAndGV4dCdcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJxLW1iLW1kXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICdmcy0xMycgOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgJ3JvdW5kZWQtLWRhcmstaW5wdXQtLXdpdGhBbGVydC0tc3BhY2UnOiBEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAncm91bmRlZC0tbGlnaHQtaW5wdXQtLXdpdGhBbGVydC0tc3BhY2UgdGV4dC1kYXJrJzogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICA6cnVsZXM9XCJnZXRSdWxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8IS0tIE5VTUJFUiBTTE9UIC0tLT5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnByZXBlbmQ+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmcy0xNCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LW52LWxpZ2h0LXRlcnRpYXJ5JzogbG9naW5Gb3JtLmNvZGU/Lmxlbmd0aCA8IDFcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2dpbkZvcm0ubW9kZSA9PT0gJ3Bob25lJ1wiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvdW50cnkgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciBjbGFzcz1cInEtbXIteHNcIiBjb2xvcj1cInRyYW5zcGFyZW50XCIgc2l6ZT1cIjNlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZ2V0RW1vamkobG9naW5Gb3JtLmNvZGUpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGxvZ2luRm9ybS5jb2RlIH19XG4gICAgICAgICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIyMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiIWNvdW50cnkgPyAnZXhwYW5kX21vcmUnIDogJ2V4cGFuZF9sZXNzJ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gU0VMRUNUIENPVU5UUlkgRElBTE9HIC0tPlxuICAgICAgICAgICAgICAgICAgICA8cS1kaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwb3NpdGlvbj1cImlzTW9iaWxlID8gJ2JvdHRvbScgOiAnc3RhbmRhcmQnXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1wYS1zbSBuby1zY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnItNDAnOiAhaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JnLW52LWRhcmsnIDogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmctbnYtbGlnaHQnOiAhRGFyay5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXJhZGl1czogNDBweCA0MHB4IDBweCAwcHggIWltcG9ydGFudDsgaGVpZ2h0OiA2MHZoOyB3aWR0aDogMTAwJTsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hlaWdodDogNjAwcHg7IHdpZHRoOiA2MDBweDsnXG4gICAgICAgICAgICAgICAgICAgICAgICB9YFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcS1wdC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImBudi0ke0dldFN1ZmZpeCgncHJpbWFyeScpfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwid3AtODUgbHMtMiB0ZXh0LXJlZ3VsYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTEzJyA6IGlzTW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyb3VuZGVkLS1kYXJrLWlucHV0LS13aXRoQWxlcnQtLXNwYWNlJzogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncm91bmRlZC0tbGlnaHQtaW5wdXQtLXdpdGhBbGVydC0tc3BhY2UgdGV4dC1udi1saWdodC1hY2NlbnQnOiAhRGFyay5pc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZmllbGRzLnNlYXJjaCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibnYtbGlnaHQtdGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJocC04MCBxLXB5LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNjcm9sbC1hcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGh1bWItc3R5bGU9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc5cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXJrLmlzQWN0aXZlID8gJyMwMTY2MDgnIDogJyM1MkIzMDEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcwLjcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmJhclN0eWxlPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDNEM0QzQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJzAuNCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLW1hcmdpbiBocC0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNvdW50cmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwiaXRlbS5jb3VudHJ5Q29kZSA9PT0gbG9naW5Gb3JtLmNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlLWNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY2NlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2V0Q29kZShpdGVtLmNvdW50cnlDb2RlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsndGV4dC13aGl0ZScgOiBEYXJrLmlzQWN0aXZlLCAndGV4dC1udi1kYXJrJyA6ICFEYXJrLmlzQWN0aXZlIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNtYWxsLWF2YXRhci1zZWN0aW9uIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmVtb2ppIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiZnMtMTMgbHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJgJHsobG9naW5Gb3JtLmNvZGUgPT09IGl0ZW0uY291bnRyeUNvZGUpID8gYHRleHQtbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfWAgOiAnJ31gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnMtMTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb3VudHJ5Q29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1kaWFsb2c+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcS1pbnB1dD5cbiAgICAgICAgICAgIDxxLXNwYWNlIC8+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbnYtbGlnaHQtdGVydGlhcnkgcS1tdC1ub25lIHEtbWItc20gZnMtMTRcIj5cbiAgICAgICAgICAgICAgICB7eyAkdCgnZmllbGRzLnBhc3N3b3JkJykgfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImxvZ2luRm9ybS5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKioqKipcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiJ3RyYW5zcGFyZW50J1wiXG4gICAgICAgICAgICAgICAgOnR5cGU9XCJpc1B3ZCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgJ2ZzLTEzJyA6IGlzTW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAncm91bmRlZC0tZGFyay1pbnB1dC0td2l0aEFsZXJ0LS1zcGFjZSc6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICdyb3VuZGVkLS1saWdodC1pbnB1dC0td2l0aEFsZXJ0LS1zcGFjZSB0ZXh0LW52LWxpZ2h0LWFjY2VudCc6ICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDcpIHx8ICR0KCd2YWxpZGF0aW9ucy5wYXNzd29yZCcpXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFwcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwibG9naW5Gb3JtLnBhc3N3b3JkPy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiaXNQd2QgPyAndmlzaWJpbGl0eScgOiAndmlzaWJpbGl0eV9vZmYnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaXNQd2QgPSAhaXNQd2RcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3EtaW5wdXQ+XG5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgIDpjb2xvcj1cImBudi0ke0dldFN1ZmZpeCgncHJpbWFyeScpfWBcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBici0yMCBweS0xMiBxLW10LWxnIGZzLTE2XCJcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkXG4gICAgICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlTG9naW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdidXR0b25zLmxvZ2luJykgfX1cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvcS1mb3JtPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwiZnMtMTIgdGV4dC1udi1saWdodC10ZXJ0aWFyeSBxLXB5LW5vbmVcIlxuICAgID5cbiAgICAgICAge3sgJHQoJ2xvZ2luLm5ld0luUGxhdGZvcm0nKSB9fVxuICAgICAgICA8c3BhblxuICAgICAgICAgICAgOmNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IGN1cnNvci1wb2ludGVyYFwiXG4gICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VWaWV3KCdzaWduLXVwJylcIlxuICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnbG9naW4uY3JlYXRlQW5BY2NvdW50JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxwXG4gICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy9mb3Jnb3QtcGFzc3dvcmQnKVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJgdGV4dC1udi0ke0dldFN1ZmZpeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gcS1wdC1tZCBjdXJzb3ItcG9pbnRlcmBcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7eyAkdCgnbG9naW4uZm9yZ290WW91clBhc3N3b3JkJykgfX1cbiAgICAgICAgPC9wPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiIGZzLTEwIHRleHQtY2VudGVyIHRleHQtbnYtbGlnaHQtdGVydGlhcnkgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICBAY2xpY2s9XCJzZXRMYW5nKGxvY2FsZS5pbmNsdWRlcygnZXMnKSA/ICdlbi1VUycgOiAnZXMtRVMnKVwiXG4gICAgPlxuICAgICAgICB7eyAkdCgnYnV0dG9ucy5jaGFuZ2VMYW5ndWFnZVRvJykgfX1cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwibWwtM1wiXG4gICAgICAgICAgICA6Y2xhc3M9XCJgdGV4dC1udi0ke0dldFN1ZmZpeCgnYWNjZW50Jyl9YFwiXG4gICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICR0KFxuICAgICAgICAgICAgICAgICAgICBgbGFuZ3MuJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZS5pbmNsdWRlcygnZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2VuZ2xpc2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc3BhbmlzaCdcbiAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBEYXJrLCBRRm9ybSwgU2NyZWVuLCB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tICdzdG9yZXMvYXV0aCc7XG5cbi8vIFByb3BzXG5kZWZpbmVQcm9wcyh7XG4gICAgd2lkdGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBjaGFuZ2VWaWV3OiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgfSxcbiAgICBzZXRMYW5nOiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgfVxufSk7XG5cbi8vIENvbnN0YW50c1xuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gU3RvcmVzXG5jb25zdCBhdXRoU3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcbmNvbnN0IHsgbG9naW5Gb3JtIH0gPSBzdG9yZVRvUmVmcyhhdXRoU3RvcmUpO1xuXG4vLyBMb2NhbGVzXG5jb25zdCB7IHQsIGxvY2FsZSB9ID0gdXNlSTE4bih7IHVzZVNjb3BlOiAnZ2xvYmFsJyB9KTtcblxuLy8gSGVscGVyc1xuaW1wb3J0IEdldFN1ZmZpeCBmcm9tICcuLi8uLi9hcHAvc2hhcmVkL2hlbHBlcnMvR2V0U3VmZml4JztcblxuLy8gRGF0YVxuaW1wb3J0IGNvdW50cmllc0RhdGEsIHsgSUNvdW50cnkgfSBmcm9tICcuLi8uLi9hc3NldHMvcmVzb3VyY2VzL2NvdW50cmllcyc7XG5cbi8vIFJlcG9zaXRvcmllc1xuaW1wb3J0IHsgdXNlUW9yaVBheVJlcG9zaXRvcnkgfSBmcm9tICdib290L2F4aW9zJztcblxuLy8gUmVmXG5jb25zdCBmb3JtUmVmID0gcmVmPFFGb3JtIHwgbnVsbD4obnVsbCk7XG5jb25zdCBjb3VudHJpZXMgPSByZWY8SUNvdW50cnlbXT4oWy4uLmNvdW50cmllc0RhdGFdKTtcbmNvbnN0IGlzUHdkID0gcmVmPGJvb2xlYW4+KHRydWUpO1xuY29uc3QgY291bnRyeSA9IHJlZjxib29sZWFuPihmYWxzZSk7XG5jb25zdCBmaWx0ZXIgPSByZWY8c3RyaW5nPignJyk7XG5jb25zdCBsb2FkaW5nID0gcmVmPGJvb2xlYW4+KGZhbHNlKTtcblxuLy8gQ29tcHV0ZWRcbmNvbnN0IGlzTW9iaWxlID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0Lm1kKTtcbmNvbnN0IGdldFJ1bGUgPSBjb21wdXRlZCgoKSA9Plxue1xuICAgIHJldHVybiBsb2dpbkZvcm0udmFsdWUubW9kZSA9PT0gJ2VtYWlsJ1xuICAgICAgICA/IFtcbiAgICAgICAgICAgICh2YWw6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAodmFsICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbC5tYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgIC9eKFtcXGRhLXpfXFwuLV0rKUAoW1xcZGEtelxcLi1dKylcXC4oW2EtelxcLl17Miw2fSkkL1xuICAgICAgICAgICAgICAgICAgICApKSB8fFxuICAgICAgICAgICAgICAgIHQoJ3ZhbGlkYXRpb25zLmVtYWlsJylcbiAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgICh2YWw6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAodmFsICYmIHZhbC5sZW5ndGggPiAwKSB8fCB0KCd2YWxpZGF0aW9ucy5yZXF1aXJlZCcpXG4gICAgICAgIF07XG59KTtcblxuXG4vLyBNZXRob2RzXG5jb25zdCBpbml0aWFsaXplRm9ybSA9ICgpID0+XG57XG4gICAgYXV0aFN0b3JlLnNldExvZ2luRm9ybSh7XG4gICAgICAgIG1vZGU6IGxvZ2luRm9ybS52YWx1ZS5tb2RlID8/ICdwaG9uZScsXG4gICAgICAgIGVtYWlsT3JQaG9uZTogbG9naW5Gb3JtLnZhbHVlLmVtYWlsT3JQaG9uZSA/PyAnJyxcbiAgICAgICAgcGFzc3dvcmQ6IGxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZCA/PyAnJyxcbiAgICAgICAgY29kZTogbG9naW5Gb3JtLnZhbHVlLmNvZGUgPz8gY291bnRyaWVzLnZhbHVlWzBdLmNvdW50cnlDb2RlXG4gICAgfSk7XG59O1xuXG5jb25zdCBjaGFuZ2VWYWxpZGF0ZSA9ICgpID0+XG57XG4gICAgYXV0aFN0b3JlLnNldExvZ2luRm9ybSh7XG4gICAgICAgIC4uLmxvZ2luRm9ybS52YWx1ZSxcbiAgICAgICAgZW1haWxPclBob25lOiAnJyxcbiAgICAgICAgbW9kZTogIGxvZ2luRm9ybS52YWx1ZS5tb2RlID09PSAnZW1haWwnID8gJ3Bob25lJyA6ICdlbWFpbCdcbiAgICB9KTtcbiAgICAkcm91dGVyLnJlcGxhY2Uoe1xuICAgICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIG1vZGU6IGxvZ2luRm9ybS52YWx1ZS5tb2RlXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmb3JtUmVmLnZhbHVlPy5yZXNldCgpO1xufTtcblxuY29uc3QgZ2V0RW1vamkgPSAoY291bnRyeUNvZGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwgPT5cbntcbiAgICByZXR1cm4gY291bnRyaWVzRGF0YS5maW5kKGMgPT4gYy5jb3VudHJ5Q29kZSA9PT0gY291bnRyeUNvZGUpPy5lbW9qaSA/PyBudWxsO1xufTtcblxuY29uc3Qgc2V0Q29kZSA9IChjb2RlOiBzdHJpbmcpOiB2b2lkICA9Plxue1xuICAgIGF1dGhTdG9yZS5zZXRMb2dpbkZvcm0oe1xuICAgICAgICAuLi5sb2dpbkZvcm0udmFsdWUsXG4gICAgICAgIGNvZGVcbiAgICB9KTtcbiAgICBjb3VudHJ5LnZhbHVlID0gZmFsc2U7XG59O1xuXG5jb25zdCBvbkZpbHRlciA9ICgpID0+XG57XG4gICAgaWYgKGZpbHRlci52YWx1ZS5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgICAgY291bnRyaWVzLnZhbHVlID0gY291bnRyaWVzRGF0YS5maWx0ZXIoKGUpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBjb3VudHJpZXMudmFsdWUgPSBbLi4uY291bnRyaWVzRGF0YV07XG4gICAgfVxufTtcblxuY29uc3QgY2hhbmdlVmlldyA9IChtb2RlOiAnZW1haWwnIHwgJ3Bob25lJykgPT5cbntcbiAgICBhdXRoU3RvcmUuc2V0TG9naW5Gb3JtKHtcbiAgICAgICAgLi4ubG9naW5Gb3JtLnZhbHVlLFxuICAgICAgICBtb2RlXG4gICAgfSk7XG4gICAgJHJvdXRlci5yZXBsYWNlKHtcbiAgICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBtb2RlOiBsb2dpbkZvcm0udmFsdWUubW9kZVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jKCkgPT5cbntcbiAgICBmb3JtUmVmLnZhbHVlPy52YWxpZGF0ZSgpLnRoZW4oYXN5bmModmFsaWRhdGVkKSA9PlxuICAgIHtcbiAgICAgICAgaWYgKHZhbGlkYXRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgbG9hZGluZy52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSAgPSBhd2FpdCB1c2VRb3JpUGF5UmVwb3NpdG9yeS5wcmVMb2dpbih7XG4gICAgICAgICAgICAgICAgTW9kdWxvOiAnbG9naW5DbGllbnRlJyxcbiAgICAgICAgICAgICAgICBVc2VyOiA8c3RyaW5nPiAobG9naW5Gb3JtLnZhbHVlLm1vZGUgPT09ICdlbWFpbCcgPyBsb2dpbkZvcm0udmFsdWUuZW1haWxPclBob25lIDogYCR7bG9naW5Gb3JtLnZhbHVlLmNvZGV9JHtsb2dpbkZvcm0udmFsdWUuZW1haWxPclBob25lfWAucmVwbGFjZUFsbCgnKycsICcnKSksXG4gICAgICAgICAgICAgICAgUGFzc3dvcmQ6IDxzdHJpbmc+IGxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpc01vYmlsZS52YWx1ZSA/ICdib3R0b20nIDogJ3RvcC1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBVcHMuLi4gJHt0KGRhdGEuZXJyb3JLZXkpfWAsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF1dGhTdG9yZS5zZXRQcmVBdXRoKHRydWUpO1xuICAgICAgICAgICAgICAgIGF1dGhTdG9yZS5zZXRBY3RpdmUyRkEoZGF0YS5hY3RpdmUyZmEpO1xuICAgICAgICAgICAgICAgIGF1dGhTdG9yZS5zZXRQaG9uZShkYXRhLnVzZXJEYXRhLnRlbGVmb25vKTtcbiAgICAgICAgICAgICAgICBhdXRoU3RvcmUuc2V0RW1haWwoZGF0YS51c2VyRGF0YS5jb3JyZW8pO1xuICAgICAgICAgICAgICAgIGF1dGhTdG9yZS5zZXRVc2VyTmFtZShkYXRhLnVzZXJEYXRhLnVzdWFyaW8pO1xuICAgICAgICAgICAgICAgIGF3YWl0ICRyb3V0ZXIucHVzaCgnL3R3by1mYWN0b3ItYXV0aCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplTW9kZSA9ICgpID0+XG57XG4gICAgaWYgKCRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnF1ZXJ5KVxuICAgIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGxvZ2luRm9ybS52YWx1ZS5tb2RlID8/ICdlbWFpbCc7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2hhbmdlVmlldygkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZT8ucXVlcnk/Lm1vZGUgPz8gbW9kZSk7XG4gICAgfVxufTtcblxuaW5pdGlhbGl6ZUZvcm0oKTtcbmluaXRpYWxpemVNb2RlKCk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uc21hbGwtYXZhdGFyLXNlY3Rpb24ge1xuICAgIC5xLWl0ZW1fX3NlY3Rpb24tLWF2YXRhciB7XG4gICAgICAgIG1pbi13aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIHJvb3RSZWYpIHtcbiAgY29uc3QgcmVmb2N1c1JlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHJlZm9jdXNUYXJnZXRFbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnc3BhbicsIHtcbiAgICAgIHJlZjogcmVmb2N1c1JlZixcbiAgICAgIGNsYXNzOiAnbm8tb3V0bGluZScsXG4gICAgICB0YWJpbmRleDogLTFcbiAgICB9KVxuICB9KVxuXG4gIGZ1bmN0aW9uIHJlZm9jdXNUYXJnZXQgKGUpIHtcbiAgICBjb25zdCByb290ID0gcm9vdFJlZi52YWx1ZVxuXG4gICAgaWYgKGUgIT09IHZvaWQgMCAmJiBlLnR5cGUuaW5kZXhPZigna2V5JykgPT09IDApIHtcbiAgICAgIGlmIChcbiAgICAgICAgcm9vdCAhPT0gbnVsbFxuICAgICAgICAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSByb290XG4gICAgICAgICYmIHJvb3QuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICByb290LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICByZWZvY3VzUmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAmJiAoZSA9PT0gdm9pZCAwIHx8IChyb290ICE9PSBudWxsICYmIHJvb3QuY29udGFpbnMoZS50YXJnZXQpID09PSB0cnVlKSlcbiAgICApIHtcbiAgICAgIHJlZm9jdXNSZWYudmFsdWUuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVmb2N1c1RhcmdldEVsLFxuICAgIHJlZm9jdXNUYXJnZXRcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB4czogMzAsXG4gIHNtOiAzNSxcbiAgbWQ6IDQwLFxuICBsZzogNTAsXG4gIHhsOiA2MFxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlLCB0b1JhdyB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5pbXBvcnQgdXNlUmVmb2N1c1RhcmdldCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yZWZvY3VzLXRhcmdldC5qcydcbmltcG9ydCB7IHVzZUZvcm1JbmplY3QsIHVzZUZvcm1Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCBvcHRpb25TaXplcyBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL29wdGlvbi1zaXplcy5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCwgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlQ2hlY2tib3hQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VTaXplUHJvcHMsXG4gIC4uLnVzZUZvcm1Qcm9wcyxcblxuICBtb2RlbFZhbHVlOiB7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogbnVsbFxuICB9LFxuICB2YWw6IHt9LFxuXG4gIHRydWVWYWx1ZTogeyBkZWZhdWx0OiB0cnVlIH0sXG4gIGZhbHNlVmFsdWU6IHsgZGVmYXVsdDogZmFsc2UgfSxcbiAgaW5kZXRlcm1pbmF0ZVZhbHVlOiB7IGRlZmF1bHQ6IG51bGwgfSxcblxuICBjaGVja2VkSWNvbjogU3RyaW5nLFxuICB1bmNoZWNrZWRJY29uOiBTdHJpbmcsXG4gIGluZGV0ZXJtaW5hdGVJY29uOiBTdHJpbmcsXG5cbiAgdG9nZ2xlT3JkZXI6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPT09ICd0ZicgfHwgdiA9PT0gJ2Z0J1xuICB9LFxuICB0b2dnbGVJbmRldGVybWluYXRlOiBCb29sZWFuLFxuXG4gIGxhYmVsOiBTdHJpbmcsXG4gIGxlZnRMYWJlbDogQm9vbGVhbixcblxuICBjb2xvcjogU3RyaW5nLFxuICBrZWVwQ29sb3I6IEJvb2xlYW4sXG4gIGRlbnNlOiBCb29sZWFuLFxuXG4gIGRpc2FibGU6IEJvb2xlYW4sXG4gIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNoZWNrYm94RW1pdHMgPSBbICd1cGRhdGU6bW9kZWxWYWx1ZScgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSwgZ2V0SW5uZXIpIHtcbiAgY29uc3QgeyBwcm9wcywgc2xvdHMsIGVtaXQsIHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgY29uc3QgeyByZWZvY3VzVGFyZ2V0RWwsIHJlZm9jdXNUYXJnZXQgfSA9IHVzZVJlZm9jdXNUYXJnZXQocHJvcHMsIHJvb3RSZWYpXG4gIGNvbnN0IHNpemVTdHlsZSA9IHVzZVNpemUocHJvcHMsIG9wdGlvblNpemVzKVxuXG4gIGNvbnN0IG1vZGVsSXNBcnJheSA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMudmFsICE9PSB2b2lkIDAgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKVxuICApXG5cbiAgY29uc3QgaW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gdG9SYXcocHJvcHMudmFsKVxuICAgIHJldHVybiBtb2RlbElzQXJyYXkudmFsdWUgPT09IHRydWVcbiAgICAgID8gcHJvcHMubW9kZWxWYWx1ZS5maW5kSW5kZXgob3B0ID0+IHRvUmF3KG9wdCkgPT09IHZhbClcbiAgICAgIDogLTFcbiAgfSlcblxuICBjb25zdCBpc1RydWUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgbW9kZWxJc0FycmF5LnZhbHVlID09PSB0cnVlXG4gICAgICA/IGluZGV4LnZhbHVlID4gLTFcbiAgICAgIDogdG9SYXcocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRvUmF3KHByb3BzLnRydWVWYWx1ZSlcbiAgKSlcblxuICBjb25zdCBpc0ZhbHNlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIG1vZGVsSXNBcnJheS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyBpbmRleC52YWx1ZSA9PT0gLTFcbiAgICAgIDogdG9SYXcocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRvUmF3KHByb3BzLmZhbHNlVmFsdWUpXG4gICkpXG5cbiAgY29uc3QgaXNJbmRldGVybWluYXRlID0gY29tcHV0ZWQoKCkgPT5cbiAgICBpc1RydWUudmFsdWUgPT09IGZhbHNlICYmIGlzRmFsc2UudmFsdWUgPT09IGZhbHNlXG4gIClcblxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gLTEgOiBwcm9wcy50YWJpbmRleCB8fCAwXG4gICkpXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYHEtJHsgdHlwZSB9IGN1cnNvci1wb2ludGVyIG5vLW91dGxpbmUgcm93IGlubGluZSBuby13cmFwIGl0ZW1zLWNlbnRlcmBcbiAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnJylcbiAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyBgIHEtJHsgdHlwZSB9LS1kYXJrYCA6ICcnKVxuICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gYCBxLSR7IHR5cGUgfS0tZGVuc2VgIDogJycpXG4gICAgKyAocHJvcHMubGVmdExhYmVsID09PSB0cnVlID8gJyByZXZlcnNlJyA6ICcnKVxuICApXG5cbiAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGlzVHJ1ZS52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnV0aHknIDogKGlzRmFsc2UudmFsdWUgPT09IHRydWUgPyAnZmFsc3knIDogJ2luZGV0JylcbiAgICBjb25zdCBjb2xvciA9IHByb3BzLmNvbG9yICE9PSB2b2lkIDAgJiYgKFxuICAgICAgcHJvcHMua2VlcENvbG9yID09PSB0cnVlXG4gICAgICB8fCAodHlwZSA9PT0gJ3RvZ2dsZScgPyBpc1RydWUudmFsdWUgPT09IHRydWUgOiBpc0ZhbHNlLnZhbHVlICE9PSB0cnVlKVxuICAgIClcbiAgICAgID8gYCB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gXG4gICAgICA6ICcnXG5cbiAgICByZXR1cm4gYHEtJHsgdHlwZSB9X19pbm5lciByZWxhdGl2ZS1wb3NpdGlvbiBub24tc2VsZWN0YWJsZSBxLSR7IHR5cGUgfV9faW5uZXItLSR7IHN0YXRlIH0keyBjb2xvciB9YFxuICB9KVxuXG4gIGNvbnN0IGZvcm1BdHRycyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwcm9wID0geyB0eXBlOiAnY2hlY2tib3gnIH1cblxuICAgIHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBPYmplY3QuYXNzaWduKHByb3AsIHtcbiAgICAgICdeY2hlY2tlZCc6IGlzVHJ1ZS52YWx1ZSA9PT0gdHJ1ZSA/ICdjaGVja2VkJyA6IHZvaWQgMCxcbiAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICB2YWx1ZTogbW9kZWxJc0FycmF5LnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMudmFsXG4gICAgICAgIDogcHJvcHMudHJ1ZVZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiBwcm9wXG4gIH0pXG5cbiAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZSxcbiAgICAgIHJvbGU6ICdjaGVja2JveCcsXG4gICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmxhYmVsLFxuICAgICAgJ2FyaWEtY2hlY2tlZCc6IGlzSW5kZXRlcm1pbmF0ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICdtaXhlZCdcbiAgICAgICAgOiAoaXNUcnVlLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJylcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgYXR0cnNbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzXG4gIH0pXG5cbiAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgIGlmIChlICE9PSB2b2lkIDApIHtcbiAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICByZWZvY3VzVGFyZ2V0KGUpXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZ2V0TmV4dFZhbHVlKCksIGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmV4dFZhbHVlICgpIHtcbiAgICBpZiAobW9kZWxJc0FycmF5LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBpZiAoaXNUcnVlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuICAgICAgICB2YWwuc3BsaWNlKGluZGV4LnZhbHVlLCAxKVxuICAgICAgICByZXR1cm4gdmFsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wcy5tb2RlbFZhbHVlLmNvbmNhdChbIHByb3BzLnZhbCBdKVxuICAgIH1cblxuICAgIGlmIChpc1RydWUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGlmIChwcm9wcy50b2dnbGVPcmRlciAhPT0gJ2Z0JyB8fCBwcm9wcy50b2dnbGVJbmRldGVybWluYXRlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gcHJvcHMuZmFsc2VWYWx1ZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0ZhbHNlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBpZiAocHJvcHMudG9nZ2xlT3JkZXIgPT09ICdmdCcgfHwgcHJvcHMudG9nZ2xlSW5kZXRlcm1pbmF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnRydWVWYWx1ZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9wcy50b2dnbGVPcmRlciAhPT0gJ2Z0J1xuICAgICAgICA/IHByb3BzLnRydWVWYWx1ZVxuICAgICAgICA6IHByb3BzLmZhbHNlVmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHMuaW5kZXRlcm1pbmF0ZVZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5dXAgKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICBvbkNsaWNrKGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0SW5uZXJDb250ZW50ID0gZ2V0SW5uZXIoaXNUcnVlLCBpc0luZGV0ZXJtaW5hdGUpXG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHsgdG9nZ2xlOiBvbkNsaWNrIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBpbm5lciA9IGdldElubmVyQ29udGVudCgpXG5cbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGluamVjdEZvcm1JbnB1dChcbiAgICAgIGlubmVyLFxuICAgICAgJ3Vuc2hpZnQnLFxuICAgICAgYCBxLSR7IHR5cGUgfV9fbmF0aXZlIGFic29sdXRlIHEtbWEtbm9uZSBxLXBhLW5vbmVgXG4gICAgKVxuXG4gICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBpbm5lckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlXG4gICAgICB9LCBpbm5lcilcbiAgICBdXG5cbiAgICBpZiAocmVmb2N1c1RhcmdldEVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjaGlsZC5wdXNoKHJlZm9jdXNUYXJnZXRFbC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbCA9IHByb3BzLmxhYmVsICE9PSB2b2lkIDBcbiAgICAgID8gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbIHByb3BzLmxhYmVsIF0pXG4gICAgICA6IGhTbG90KHNsb3RzLmRlZmF1bHQpXG5cbiAgICBsYWJlbCAhPT0gdm9pZCAwICYmIGNoaWxkLnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBgcS0keyB0eXBlIH1fX2xhYmVsIHEtYW5jaG9yLS1za2lwYFxuICAgICAgfSwgbGFiZWwpXG4gICAgKVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvbktleWRvd24sXG4gICAgICBvbktleXVwXG4gICAgfSwgY2hpbGQpXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgdXNlQ2hlY2tib3gsIHsgdXNlQ2hlY2tib3hQcm9wcywgdXNlQ2hlY2tib3hFbWl0cyB9IGZyb20gJy4vdXNlLWNoZWNrYm94LmpzJ1xuXG5jb25zdCBiZ05vZGUgPSBoKCdkaXYnLCB7XG4gIGtleTogJ3N2ZycsXG4gIGNsYXNzOiAncS1jaGVja2JveF9fYmcgYWJzb2x1dGUnXG59LCBbXG4gIGgoJ3N2ZycsIHtcbiAgICBjbGFzczogJ3EtY2hlY2tib3hfX3N2ZyBmaXQgYWJzb2x1dGUtZnVsbCcsXG4gICAgdmlld0JveDogJzAgMCAyNCAyNCcsXG4gICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gIH0sIFtcbiAgICBoKCdwYXRoJywge1xuICAgICAgY2xhc3M6ICdxLWNoZWNrYm94X190cnV0aHknLFxuICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgZDogJ00xLjczLDEyLjkxIDguMSwxOS4yOCAyMi43OSw0LjU5J1xuICAgIH0pLFxuXG4gICAgaCgncGF0aCcsIHtcbiAgICAgIGNsYXNzOiAncS1jaGVja2JveF9faW5kZXQnLFxuICAgICAgZDogJ000LDE0SDIwVjEwSDQnXG4gICAgfSlcbiAgXSlcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQ2hlY2tib3gnLFxuXG4gIHByb3BzOiB1c2VDaGVja2JveFByb3BzLFxuICBlbWl0czogdXNlQ2hlY2tib3hFbWl0cyxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBnZXRJbm5lciAoaXNUcnVlLCBpc0luZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGNvbnN0IGljb24gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgICAoaXNUcnVlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyBwcm9wcy5jaGVja2VkSWNvblxuICAgICAgICAgIDogKGlzSW5kZXRlcm1pbmF0ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IHByb3BzLmluZGV0ZXJtaW5hdGVJY29uXG4gICAgICAgICAgICAgIDogcHJvcHMudW5jaGVja2VkSWNvblxuICAgICAgICAgICAgKVxuICAgICAgICApIHx8IG51bGxcbiAgICAgIClcblxuICAgICAgcmV0dXJuICgpID0+IChcbiAgICAgICAgaWNvbi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAga2V5OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLWNoZWNrYm94X19pY29uLWNvbnRhaW5lciBhYnNvbHV0ZS1mdWxsIGZsZXggZmxleC1jZW50ZXIgbm8td3JhcCdcbiAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiAncS1jaGVja2JveF9faWNvbicsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBpY29uLnZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFsgYmdOb2RlIF1cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlQ2hlY2tib3goJ2NoZWNrYm94JywgZ2V0SW5uZXIpXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1mb3JtXG4gICAgICAgIHJlZj1cImZvcm1SZWZcIlxuICAgICAgICBncmVlZHlcbiAgICA+XG4gICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtbnYtbGlnaHQtdGVydGlhcnkgcS1tdC1ub25lIHEtbWItc20gZmxleCBmbGV4LWlubGluZSBpdGVtcy1jZW50ZXIgZnMtMTQganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3sgJHQoJ2ZpZWxkcy5lbWFpbCcpIH19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICB2LW1vZGVsPVwic2lnblVwRm9ybS5lbWFpbFwiXG4gICAgICAgICAgICA6Y29sb3I9XCIndHJhbnNwYXJlbnQnXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibW9uZXlAcW9yaXBheS5jb21cIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1tYi1tZFwiXG4gICAgICAgICAgICA6ZGlzYWJsZT1cImxvYWRpbmdcIlxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICdmcy0xMycgOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAncm91bmRlZC0tZGFyay1pbnB1dC0td2l0aEFsZXJ0LS1zcGFjZSc6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgJ3JvdW5kZWQtLWxpZ2h0LWlucHV0LS13aXRoQWxlcnQtLXNwYWNlIHRleHQtbnYtbGlnaHQtYWNjZW50JzogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICh2YWwpID0+XG4gICAgICAgICAgICAgICAgICAgICh2YWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5tYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXihbXFxkYS16X1xcLi1dKylAKFtcXGRhLXpcXC4tXSspXFwuKFthLXpcXC5dezIsNn0pJC9cbiAgICAgICAgICAgICAgICAgICAgICAgICkpIHx8XG4gICAgICAgICAgICAgICAgICAgICR0KCd2YWxpZGF0aW9ucy5lbWFpbCcpXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgPlxuICAgICAgICA8L3EtaW5wdXQ+XG5cbiAgICAgICAgPHEtc3BhY2UgLz5cblxuICAgICAgICA8cCBjbGFzcz1cInRleHQtbnYtbGlnaHQtdGVydGlhcnkgcS1tdC1ub25lIHEtbWItc20gZnMtMTRcIj5cbiAgICAgICAgICAgIHt7ICR0KCdmaWVsZHMucGFzc3dvcmQnKSB9fVxuICAgICAgICA8L3A+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKioqKipcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNpZ25VcEZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgOmNvbG9yPVwiJ3RyYW5zcGFyZW50J1wiXG4gICAgICAgICAgICBjbGFzcz1cInEtbWItbWRcIlxuICAgICAgICAgICAgOnR5cGU9XCJpc1B3ZCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgOmRpc2FibGU9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAnZnMtMTMnIDogaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgJ3JvdW5kZWQtLWRhcmstaW5wdXQtLXdpdGhBbGVydC0tc3BhY2UnOiBEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICdyb3VuZGVkLS1saWdodC1pbnB1dC0td2l0aEFsZXJ0LS1zcGFjZSB0ZXh0LW52LWxpZ2h0LWFjY2VudCc6ICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICAodmFsKSA9PiAodmFsICYmIHZhbC5sZW5ndGggPiA3KSB8fCAkdCgndmFsaWRhdGlvbnMucGFzc3dvcmQnKVxuICAgICAgICAgICAgXVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwic2lnblVwRm9ybS5wYXNzd29yZD8ubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiaXNQd2QgPyAndmlzaWJpbGl0eScgOiAndmlzaWJpbGl0eV9vZmYnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImlzUHdkID0gIWlzUHdkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLWlucHV0PlxuXG4gICAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW52LWxpZ2h0LXRlcnRpYXJ5IHEtbXQtbm9uZSBxLW1iLXNtIGZzLTE0XCI+XG4gICAgICAgICAgICB7eyAkdCgnZmllbGRzLmNvbmZpcm1QYXNzd29yZCcpIH19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKioqXCJcbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICB2LW1vZGVsPVwic2lnblVwRm9ybS5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgOmNvbG9yPVwiJ3RyYW5zcGFyZW50J1wiXG4gICAgICAgICAgICA6ZGlzYWJsZT1cImxvYWRpbmdcIlxuICAgICAgICAgICAgOnR5cGU9XCJpc1B3ZCA/ICdwYXNzd29yZCcgOiAndGV4dCdcIlxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICdmcy0xMycgOiBpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAncm91bmRlZC0tZGFyay1pbnB1dC0td2l0aEFsZXJ0LS1zcGFjZSc6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgJ3JvdW5kZWQtLWxpZ2h0LWlucHV0LS13aXRoQWxlcnQtLXNwYWNlIHRleHQtbnYtbGlnaHQtYWNjZW50JzogIURhcmsuaXNBY3RpdmVcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICh2YWwpID0+ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDcpIHx8ICR0KCd2YWxpZGF0aW9ucy5wYXNzd29yZCcpXG4gICAgICAgICAgICBdXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphcHBlbmQ+XG4gICAgICAgICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJzaWduVXBGb3JtLmNvbmZpcm1QYXNzd29yZD8ubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiaXNQd2QyID8gJ3Zpc2liaWxpdHknIDogJ3Zpc2liaWxpdHlfb2ZmJ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJpc1B3ZDIgPSAhaXNQd2QyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLWlucHV0PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZnMtMTIgdGV4dC1udi1saWdodC10ZXJ0aWFyeSBxLXB5LW5vbmUgcS1tdC1tZCBxLW1iLW1kIHJvdyBxLW14LW5vbmUgaXRlbXMtc3RhcnRcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGZsZXggaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8cS1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2lnblVwRm9ybS5hY2NlcHRlZFRlcm1zXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZC1pY29uPVwiY2hlY2tfY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkLWljb249XCJjaGVja19jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICA6Y29sb3I9XCJgbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfWBcIlxuICAgICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlLWljb249XCJoZWxwXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGU9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTExIHEtcGwtc21cIj5cbiAgICAgICAgICAgICAgICB7eyAkdCgnbG9naW4udGVybXNBbmRQb2xpY3knKSB9fVxuICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImB0ZXh0LW52LSR7R2V0U3VmZml4KCdhY2NlbnQnKX0gY3Vyc29yLXBvaW50ZXJgXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdsb2dpbi50ZXJtcycpIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdsb2dpbi5hbmQnKSB9fVxuICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImB0ZXh0LW52LSR7R2V0U3VmZml4KCdhY2NlbnQnKX0gY3Vyc29yLXBvaW50ZXJgXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdsb2dpbi5wb2xpdGljcycpIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdsb2dpbi5vZicpIH19IHt7IGdldE5hbWUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICA6Y29sb3I9XCJgbnYtJHtHZXRTdWZmaXgoJ3ByaW1hcnknKX1gXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCBici0yMCBweS0xMiBxLW10LWxnIGZzLTE2XCJcbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIG5vLWNhcHNcbiAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICBAY2xpY2s9XCJoYW5kbGVTaWduVXBcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7eyAkdCgnYnV0dG9ucy5jcmVhdGVBY2NvdW50JykgfX1cbiAgICAgICAgPC9xLWJ0bj5cbiAgICA8L3EtZm9ybT5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cImZzLTEyIHRleHQtbnYtbGlnaHQtdGVydGlhcnkgcS1weS1ub25lIHEtcGItbWRcIj5cbiAgICAgICAgICAgIHt7ICR0KCdsb2dpbi5hbHJlYWR5SGF2ZUFuQWNjb3VudCcpIH19XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImB0ZXh0LW52LSR7R2V0U3VmZml4KCdhY2NlbnQnKX0gY3Vyc29yLXBvaW50ZXJgXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnJlcGxhY2UoJy9sb2dpbicpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyAkdCgnbG9naW4ubG9naW4nKSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPGRpdlxuICAgICAgICBjbGFzcz1cIiBmcy0xMCB0ZXh0LWNlbnRlciB0ZXh0LW52LWxpZ2h0LXRlcnRpYXJ5IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgQGNsaWNrPVwic2V0TGFuZyhsb2NhbGUuaW5jbHVkZXMoJ2VzJykgPyAnZW4tVVMnIDogJ2VzLUVTJylcIlxuICAgID5cbiAgICAgICAge3sgJHQoJ2J1dHRvbnMuY2hhbmdlTGFuZ3VhZ2VUbycpIH19XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cIm1sLTNcIlxuICAgICAgICAgICAgOmNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfWBcIlxuICAgICAgICA+XG4gICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgICAgICAgIGBsYW5ncy4ke1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlLmluY2x1ZGVzKCdlcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnZW5nbGlzaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzcGFuaXNoJ1xuICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgeyBEYXJrLCBRRm9ybSwgU2NyZWVuLCB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IEdldFN1ZmZpeCBmcm9tICcuLi8uLi9hcHAvc2hhcmVkL2hlbHBlcnMvR2V0U3VmZml4JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgc3RvcmVUb1JlZnMgfSBmcm9tICdwaW5pYSc7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tICdzdG9yZXMvYXV0aCc7XG5cbi8vIFByb3BzXG5kZWZpbmVQcm9wcyh7XG4gICAgaGVpZ2h0OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgc2V0TGFuZzoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvblxuICAgIH1cbn0pO1xuXG4vLyBDb25zdGFudHNcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbi8vIFN0b3Jlc1xuY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5jb25zdCB7IHNpZ25VcEZvcm0gfSA9IHN0b3JlVG9SZWZzKGF1dGhTdG9yZSk7XG5cbi8vIExvY2FsZXNcbmNvbnN0IHsgdCwgbG9jYWxlIH0gPSB1c2VJMThuKHsgdXNlU2NvcGU6ICdnbG9iYWwnIH0pO1xuXG4vLyBSZWZcbmNvbnN0IGlzUHdkID0gcmVmPGJvb2xlYW4+KHRydWUpO1xuY29uc3QgaXNQd2QyID0gcmVmPGJvb2xlYW4+KHRydWUpO1xuY29uc3QgZm9ybVJlZiA9IHJlZjxRRm9ybSB8IG51bGw+KG51bGwpO1xuY29uc3QgbG9hZGluZyA9IHJlZjxib29sZWFuPihmYWxzZSk7XG5cbi8vIENvbXB1dGVkXG5jb25zdCBpc01vYmlsZSA9IGNvbXB1dGVkKCgpID0+IFNjcmVlbi5sdC5tZCk7XG5jb25zdCBnZXROYW1lID0gY29tcHV0ZWQoKCkgPT4gcHJvY2Vzcy5lbnYuQVBQX05BTUUpO1xuXG4vLyBNZXRob2RzXG5jb25zdCBoYW5kbGVTaWduVXAgPSBhc3luYygpID0+XG57XG4gICAgZm9ybVJlZi52YWx1ZT8udmFsaWRhdGUoKS50aGVuKGFzeW5jKHZhbGlkYXRlZCkgPT5cbiAgICB7XG4gICAgICAgIGlmICh2YWxpZGF0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRpbmcudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY29uc3QgeyBkYXRhIH0gID0gYXdhaXQgdXNlUW9yaVBheVJlcG9zaXRvcnkuc2lnblVwKCk7XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvYWRpbmcudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuXG5cbiAgICAgICAgICAgIC8vIGlmIChkYXRhLmVycm9yKVxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgICRxLm5vdGlmeSh7XG4gICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBpc01vYmlsZS52YWx1ZSA/ICdib3R0b20nIDogJ3RvcC1yaWdodCcsXG4gICAgICAgICAgICAvLyAgICAgICAgIG1lc3NhZ2U6IGBVcHMuLi4gJHtkYXRhLm1zZ31gIC8qIHQoZGF0YS5rZXkpICovLFxuICAgICAgICAgICAgLy8gICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAvLyAgICAgICAgIGljb246ICd3YXJuaW5nJ1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICBhdXRoU3RvcmUuc2V0UHJlQXV0aCh0cnVlKTtcbiAgICAgICAgICAgIC8vICAgICBhdXRoU3RvcmUuc2V0QWN0aXZlMkZBKGRhdGEuYWN0aXZlMmZhKTtcbiAgICAgICAgICAgIC8vICAgICBhd2FpdCAkcm91dGVyLnB1c2goJy90d28tZmFjdG9yLWF1dGgnKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZSBjbGFzcz1cImhwLTEwMFwiIDpjbGFzcz1cInsgcm93OiAhaXNNb2JpbGUgfVwiPlxuICAgICAgICA8IS0tIFVQUEVSIFJPVyBXSVRIIExPR08gRk9SIE1PQklMRSAtLT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICdocC00MCBmbGV4IGNvbHVtbiBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgbm8tbWFyZ2luJzpcbiAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGUsXG4gICAgICAgICAgICAgICAgJ2NvbC03IGNvbC1sZy04IHJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInOiAhaXNNb2JpbGVcbiAgICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAndGV4dC1udi1saWdodC1hY2NlbnQnOiAhRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtd2hpdGUnOiBEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAncS1weC1zbSc6IGlzWFNcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggY29sdW1uIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExvZ28gY2xhc3M9XCJxLW1iLWxnXCIgOnNpemU9XCJpc01vYmlsZSA/ICcxNjVweCcgOiAnNTQ1cHgnXCIgLz5cbiAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnZnMtMjMnOiBpc1hTIH1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLXBhZGRpbmcgcS1tYi14cyBxLW10LXNtIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdsb2dpbi53ZWxjb21lJywgW2Ake25hbWV9YF0pIH19XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vLW1hcmdpbiBuby1wYWRkaW5nIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZzLTEyJzogIWlzTW9iaWxlICYmIGlzWFMsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnMtMTEnOiBpc1hTXG4gICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoJ2xvZ2luLmNhcHRpb24nKSB9fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgJ2hwLTEwMCB3cC0xMDAnOlxuICAgICAgICAgICAgICAgICAgICAoaXNNb2JpbGUgJiYgYnV0dG9uID09PSAnc2lnbi11cCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIHNjcmVlblNpemUuaGVpZ2h0IDw9IDc2NCxcbiAgICAgICAgICAgICAgICAnaHAtNjAnOlxuICAgICAgICAgICAgICAgICAgICBpc01vYmlsZSAmJiBidXR0b24gPT09ICdsb2dpbicgJiYgc2NyZWVuU2l6ZS5oZWlnaHQgPiA3NjQsXG4gICAgICAgICAgICAgICAgJ2NvbC01IGNvbC1sZy00IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJzogIWlzTW9iaWxlXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIDpzdHlsZT1cImAke1xuICAgICAgICAgICAgICAgIChpc01vYmlsZSAmJiBidXR0b24gPT09ICdzaWduLXVwJykgfHwgc2NyZWVuU2l6ZS5oZWlnaHQgPD0gNzY0XG4gICAgICAgICAgICAgICAgICAgID8gYHRvcDogJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuU2l6ZS5oZWlnaHQgPD0gNzY0ID8gJzAnIDogcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICB9JSAhaW1wb3J0YW50OyBwb3NpdGlvbjogYWJzb2x1dGU7YFxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9YFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDwhLS0gTE9HSU4gQ0FSRCAtLT5cbiAgICAgICAgICAgIDxxLWNhcmRcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJgJHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGUgJiYgYnV0dG9uID09PSAnbG9naW4nICYmIHNjcmVlblNpemUuaGVpZ2h0ID4gNzY0XG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggMHB4IDBweCAhaW1wb3J0YW50OydcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9YFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuby1tYXJnaW4gcS1weC1zbVwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICAgICAnZGFyay0tY2FyZCc6IERhcmsuaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICdiZy13aGl0ZSc6ICFEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAnYnItNDAgaHAtODAgd3AtOTMgcS1weS1tZCc6ICFpc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgJ2hwLTEwMCB3cC0xMDAgcS1weS1tZCc6IGlzTW9iaWxlXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWFcbiAgICAgICAgICAgICAgICAgICAgOnRodW1iLXN0eWxlPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFyay5pc0FjdGl2ZSA/ICcjMDE2NjA4JyA6ICcjNTJCMzAxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzNweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMC43J1xuICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgOmJhclN0eWxlPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNDNEM0QzQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJzAuNCdcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm8tbWFyZ2luIGhwLTEwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJwdC0yMCByb3cgbm8tbWFyZ2luIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1pbmxpbmUganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9PT0gJ2xvZ2luJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctbnYtJHtHZXRTdWZmaXgoJ3NlY29uZGFyeScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IURhcmsuaXNBY3RpdmUgPyAndGV4dC1udi1saWdodC1hY2NlbnQnIDogJyd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgdGV4dC1udi0ke0dldFN1ZmZpeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RlcnRpYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0xNyBici0zMCBmcy0xMiBscy0yIHEtbXItc20gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VWaWV3KCdsb2dpbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdidXR0b25zLmxvZ2luJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPT09ICdzaWduLXVwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgYmctbnYtJHtHZXRTdWZmaXgoJ3NlY29uZGFyeScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IURhcmsuaXNBY3RpdmUgPyAndGV4dC1udi1saWdodC1hY2NlbnQnIDogJyd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgdGV4dC1udi0ke0dldFN1ZmZpeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFEYXJrLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RlcnRpYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0xNyBici0zMCBmcy0xMiBscy0yIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlVmlldygnc2lnbi11cCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdidXR0b25zLnJlZ2lzdGVyJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzd2l0Y2hNb2RlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibnYtbGlnaHQtdGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwiRGFyay5pc0FjdGl2ZSA/ICdsaWdodF9tb2RlJyA6ICdkYXJrX21vZGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJpbi1vdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVudGVyLWFjdGl2ZS1jbGFzcz1cImAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID8gJycgOiAnYW5pbWF0ZWQgem9vbUluJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiYnV0dG9uID09PSAnbG9naW4nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpkdXJhdGlvbj1cInsgZW50ZXI6IDAsIGxlYXZlOiAwIH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbkZvcm0gOndpZHRoPVwic2NyZWVuU2l6ZS53aWR0aFwiIDpjaGFuZ2Utdmlldz1cImNoYW5nZVZpZXdcIiA6c2V0LWxhbmc9XCJzZXRMYW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJpbi1vdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVudGVyLWFjdGl2ZS1jbGFzcz1cImAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID8gJycgOiAnYW5pbWF0ZWQgem9vbUluJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiYnV0dG9uID09PSAnc2lnbi11cCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmR1cmF0aW9uPVwieyBlbnRlcjogMCwgbGVhdmU6IDAgfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZ25VcEZvcm0gOmhlaWdodD1cInNjcmVlblNpemUuaGVpZ2h0XCIgOnNldC1sYW5nPVwic2V0TGFuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgPC9xLXNjcm9sbC1hcmVhPlxuICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IERhcmssIFNjcmVlbiwgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkLCBvblVubW91bnRlZCwgcmVhY3RpdmUsIHJlZiwgd2F0Y2hFZmZlY3QgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9hcHAvY29tcG9uZW50cy9Mb2dvLnZ1ZSc7XG5pbXBvcnQgR2V0U3VmZml4IGZyb20gJy4uLy4uL2FwcC9zaGFyZWQvaGVscGVycy9HZXRTdWZmaXgnO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnQvTG9naW5Gb3JtLnZ1ZSc7XG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnQvU2lnblVwRm9ybS52dWUnO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IHVzZVNldHRpbmdzU3RvcmUgfSBmcm9tICdzdG9yZXMvc2V0dGluZ3MnO1xuXG4vLyBTVE9SRVxuY29uc3Qgc2V0dGluZ3NTdG9yZSA9IHVzZVNldHRpbmdzU3RvcmUoKTtcblxuLy8gQ09OU1RBTlRTXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBhbmltYXRlVGltZW91dCA9IDxhbnk+cmVmKG51bGwpO1xuY29uc3QgeyBsb2NhbGUgfSA9IHVzZUkxOG4oeyB1c2VTY29wZTogJ2dsb2JhbCcgfSk7XG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG4vLyBSRUZFUkVOQ0VTXG5jb25zdCBidXR0b24gPSByZWY8c3RyaW5nPignbG9naW4nKTtcbmNvbnN0IHBvc2l0aW9uID0gcmVmKDQwKTtcbmNvbnN0IHNjcmVlblNpemUgPSByZWFjdGl2ZSh7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG59KTtcblxuLy8gQ09NUFVURURTXG5cbmNvbnN0IGlzTW9iaWxlID0gY29tcHV0ZWQoKCkgPT4gU2NyZWVuLmx0Lm1kKTtcblxuY29uc3QgaXNYUyA9IGNvbXB1dGVkKCgpID0+IFNjcmVlbi5sdC5zbSk7XG5cbmNvbnN0IG5hbWUgPSBjb21wdXRlZCgoKSA9PiBwcm9jZXNzLmVudi5BUFBfTkFNRSk7XG5cbi8vIEZVTkNUSU9OU1xuXG5jb25zdCBzd2l0Y2hNb2RlID0gKCkgPT5cbntcbiAgICB2b2lkIHNldHRpbmdzU3RvcmUuc2V0RGFya01vZGUoIURhcmsuaXNBY3RpdmUpO1xufTtcblxuY29uc3QgYW5pbWF0ZURyYXdlclRvID0gKGhlaWdodDogbnVtYmVyKSA9Plxue1xuICAgIGNsZWFyVGltZW91dChhbmltYXRlVGltZW91dC52YWx1ZSk7XG5cbiAgICBjb25zdCBkaWZmID0gaGVpZ2h0IC0gcG9zaXRpb24udmFsdWU7XG5cbiAgICBpZiAoZGlmZiAhPT0gMClcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uLnZhbHVlICs9IE1hdGguYWJzKGRpZmYpIDwgMiA/IGRpZmYgOiBNYXRoLnJvdW5kKGRpZmYgLyAyKTtcblxuICAgICAgICBhbmltYXRlVGltZW91dC52YWx1ZSA9IHNldFRpbWVvdXQoKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYW5pbWF0ZURyYXdlclRvKGhlaWdodCk7XG4gICAgICAgIH0sIDMwKTtcbiAgICB9XG59O1xuXG5jb25zdCBjaGFuZ2VWaWV3ID0gKHZpZXc6IHN0cmluZykgPT5cbntcbiAgICBidXR0b24udmFsdWUgPSB2aWV3O1xuICAgICRyb3V0ZXIucmVwbGFjZShgLyR7dmlld31gKTtcbiAgICBpZiAoYnV0dG9uLnZhbHVlID09PSAnc2lnbi11cCcgJiYgaXNNb2JpbGUpXG4gICAge1xuICAgICAgICBhbmltYXRlRHJhd2VyVG8oMCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGFuaW1hdGVEcmF3ZXJUbygzOSk7XG4gICAgfVxufTtcblxuY29uc3Qgb25SZXNpemUgPSAoKTogdm9pZCA9Plxue1xuICAgIHNjcmVlblNpemUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHNjcmVlblNpemUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbn07XG5cbmNvbnN0IHNldExhbmcgPSAobGFuZzogc3RyaW5nKSA9Plxue1xuICAgIHZvaWQgc2V0dGluZ3NTdG9yZS5zZXRMYW5nKGxhbmcpO1xufTtcblxub25SZXNpemUoKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4vLyBXQVRDSEVSU1xud2F0Y2hFZmZlY3QoKCkgPT5cbntcbiAgICBpZiAoJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUuZnVsbFBhdGguaW5jbHVkZXMoJy9zaWduLXVwJykpXG4gICAge1xuICAgICAgICBidXR0b24udmFsdWUgPSAnc2lnbi11cCc7XG4gICAgICAgIHBvc2l0aW9uLnZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUuZnVsbFBhdGguaW5jbHVkZXMoJy9sb2dpbicpKVxuICAgIHtcbiAgICAgICAgYnV0dG9uLnZhbHVlID0gJ2xvZ2luJztcbiAgICB9XG59KTtcblxuLy8gTElGRUNZQ0xFIEhPT0tTXG5vblVubW91bnRlZCgoKSA9Plxue1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcbiAgICB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gICAgfVxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmRhcmstLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDIyMjk7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIm9uS2V5dXAiLCJoYW5kbGVy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LE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJ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
