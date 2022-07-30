import { _ as _export_sfc, d as defineComponent, ao as useSettingsStore, aa as storeToRefs, y as ref, a as computed, S as Screen, ap as watchEffect, o as openBlock, ac as createElementBlock, h as createBaseVNode, ae as toDisplayString, n as normalizeClass, u as unref, aj as Fragment, ak as renderList, e as createBlock, P as Plugin, g as withDirectives, v as vShow } from "./index.f0dfeb9e.js";
import { Q as QInput } from "./QInput.71830f22.js";
import { G as GetSuffix } from "./GetSuffix.1d77985a.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CodeInput",
  props: {
    qtInputs: {
      type: Number,
      default: 6
    },
    showSendCode: {
      type: Boolean,
      default: true
    },
    code: String,
    mode: {
      type: String,
      default: null
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["addCode", "removeCode", "sendCode"],
  setup(__props, { emit }) {
    const props = __props;
    const settingsStore = useSettingsStore();
    const settingsStoreRef = storeToRefs(settingsStore);
    const inputs = ref([]);
    const valueInputs = ref([]);
    if (Boolean(props.code) && props.code) {
      valueInputs.value = props.code.trim().split("");
    }
    const isMobile = computed(() => Screen.lt.md);
    const onUpdate = (value, index) => {
      valueInputs.value[index] = value.length > 0 ? value : null;
      const focus = (i) => {
        if (inputs.value[i]) {
          inputs.value[i].focus();
        }
      };
      if (value.length > 0) {
        focus(index + 1);
      } else {
        focus(index - 1);
      }
    };
    const onPaste = (event) => {
      const copy = event.clipboardData.getData("text");
      if (!Number(copy)) {
        return;
      }
      const valueCopy = `${copy}`.replaceAll(" ", "").trim().split("");
      for (let i = 0; i < props.qtInputs; i++) {
        valueInputs.value[i] = valueCopy[i];
      }
    };
    watchEffect(() => {
      if (valueInputs.value.every((v) => v) && valueInputs.value.length === props.qtInputs) {
        emit("addCode", valueInputs.value.filter((v) => v).toString().replaceAll(",", ""));
      } else {
        emit("removeCode", null);
      }
    });
    const activeCounter = () => {
      if (props.mode) {
        settingsStoreRef[props.mode].value.active = true;
        settingsStore.ActiveCounter2FA(props.mode, 60);
        emit("sendCode");
      }
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([{
          "wp-100": unref(Screen).gt.sm,
          "wp-55": unref(Screen).sm,
          "wp-100": unref(Screen).xs
        }, "flex flex-inline justify-between"])
      }, [
        createBaseVNode("p", {
          class: normalizeClass([{ "fs-14": unref(isMobile), "fs-16": !unref(isMobile) }, "wp-100 q-mt-none q-mb-sm"])
        }, toDisplayString(_ctx.$t("codeValidation.typeDigits")), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.qtInputs, (input, index) => {
          return openBlock(), createBlock(unref(QInput), {
            key: index,
            dark: "",
            class: normalizeClass(["text-center input", {
              "rounded--dark-input--withAlert": unref(Plugin).isActive,
              "rounded--light-input text-nv-light-accent": !unref(Plugin).isActive
            }]),
            style: { "width": "3.34em" },
            rounded: "",
            outlined: "",
            disable: props.disable,
            modelValue: valueInputs.value[index],
            "onUpdate:modelValue": [($event) => valueInputs.value[index] = $event, ($event) => onUpdate($event, index)],
            ref_for: true,
            ref: (_ref) => {
              inputs.value[index] = _ref;
            },
            onPaste,
            maxlength: "1",
            inputmode: "numeric",
            mask: "#",
            rules: [
              (v) => v && v.length > 0 || "Este campo es requerido."
            ],
            color: "transparent"
          }, null, 8, ["disable", "modelValue", "onUpdate:modelValue", "rules", "class"]);
        }), 128)),
        props.mode && ((_a = unref(settingsStore)[props.mode]) == null ? void 0 : _a.active) ? withDirectives((openBlock(), createElementBlock("p", {
          key: 0,
          style: { "margin-top": "-12px" },
          class: normalizeClass(["wp-100 text-right fs-12 cursor-pointer", {
            "text-nv-tertiary": unref(Plugin).isActive,
            "text-nv-secondary": !unref(Plugin).isActive
          }])
        }, toDisplayString(_ctx.$t("codeValidation.resendCode")) + " " + toDisplayString(unref(settingsStore)[props.mode].counter) + "s ", 3)), [
          [vShow, __props.showSendCode]
        ]) : withDirectives((openBlock(), createElementBlock("p", {
          key: 1,
          class: normalizeClass([`text-nv-${unref(GetSuffix)("accent")}`, "wp-100 text-right fs-12 cursor-pointer"]),
          style: { "margin-top": "-12px" },
          onClick: activeCounter
        }, toDisplayString(_ctx.$t("codeValidation.sendCode")), 3)), [
          [vShow, __props.showSendCode]
        ])
      ], 2);
    };
  }
});
var CodeInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "CodeInput.vue"]]);
const EncodeText = (text, type) => {
  if (type === "email") {
    const aux = text.split("@");
    const aux2 = aux[1].split(".");
    return aux[0].slice(0, 3).concat(
      aux[0].slice(3, aux[0].length).split("").map(() => "*").join().replace(/,/g, ""),
      "@"
    ).concat(
      aux2[0].split("").map(() => "*").join().replace(/,/g, ""),
      ".",
      aux2[1]
    );
  } else if (type === "phone") {
    return text.slice(0, 7).concat(
      text.slice(7, text.length - 2).split("").map(() => "*").join().replace(/,/g, "").concat(text.slice(text.length - 2, text.length))
    );
  }
  return text;
};
export { CodeInput as C, EncodeText as E };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb2RlVGV4dC45OWYwMDJkNy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL0NvZGVJbnB1dC52dWUiLCIuLi8uLi8uLi9zcmMvYXBwL3NoYXJlZC9oZWxwZXJzL0VuY29kZVRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXZcbiAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgJ3dwLTEwMCc6IFNjcmVlbi5ndC5zbSxcbiAgICAgICAgICAgICd3cC01NSc6IFNjcmVlbi5zbSxcbiAgICAgICAgICAgICd3cC0xMDAnOiBTY3JlZW4ueHNcbiAgICAgICAgfVwiXG4gICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWlubGluZSBqdXN0aWZ5LWJldHdlZW5cIlxuICAgID5cbiAgICA8cCA6Y2xhc3M9XCJ7ICdmcy0xNCcgOiBpc01vYmlsZSwgJ2ZzLTE2JyA6ICFpc01vYmlsZSB9XCIgY2xhc3M9XCJ3cC0xMDAgcS1tdC1ub25lIHEtbWItc21cIj5cbiAgICAgICAge3sgJHQoJ2NvZGVWYWxpZGF0aW9uLnR5cGVEaWdpdHMnKSB9fVxuICAgIDwvcD5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgIHYtZm9yPVwiKGlucHV0LCBpbmRleCkgaW4gcXRJbnB1dHNcIiA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBpbnB1dFwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAzLjM0ZW1cIlxuICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIDpkaXNhYmxlPVwicHJvcHMuZGlzYWJsZVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwidmFsdWVJbnB1dHNbaW5kZXhdXCJcbiAgICAgICAgICAgIDpyZWY9XCJfcmVmID0+IHsgaW5wdXRzW2luZGV4XSA9IF9yZWYgfVwiXG4gICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwib25VcGRhdGUoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgQHBhc3RlPVwib25QYXN0ZVwiXG4gICAgICAgICAgICBtYXhsZW5ndGg9XCIxXCJcbiAgICAgICAgICAgIGlucHV0bW9kZT1cIm51bWVyaWNcIlxuICAgICAgICAgICAgbWFzaz1cIiNcIlxuICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgICh2KSA9PiB2ICYmIHYubGVuZ3RoID4gMCB8fCAnRXN0ZSBjYW1wbyBlcyByZXF1ZXJpZG8uJ1xuICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICA6Y29sb3I9XCIndHJhbnNwYXJlbnQnXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAncm91bmRlZC0tZGFyay1pbnB1dC0td2l0aEFsZXJ0JzogRGFyay5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAncm91bmRlZC0tbGlnaHQtaW5wdXQgdGV4dC1udi1saWdodC1hY2NlbnQnOiAhRGFyay5pc0FjdGl2ZVxuICAgICAgICAgICAgfVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHBcbiAgICAgICAgICAgIHYtaWY9XCJwcm9wcy5tb2RlICYmIHNldHRpbmdzU3RvcmVbcHJvcHMubW9kZV0/LmFjdGl2ZVwiXG4gICAgICAgICAgICB2LXNob3c9XCJzaG93U2VuZENvZGVcIlxuICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAtMTJweDsgIWltcG9ydGFudFwiXG4gICAgICAgICAgICBjbGFzcz1cIndwLTEwMCB0ZXh0LXJpZ2h0IGZzLTEyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAndGV4dC1udi10ZXJ0aWFyeScgOiBEYXJrLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICd0ZXh0LW52LXNlY29uZGFyeScgOiAhRGFyay5pc0FjdGl2ZVxuICAgICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHt7ICR0KCdjb2RlVmFsaWRhdGlvbi5yZXNlbmRDb2RlJykgfX0ge3sgc2V0dGluZ3NTdG9yZVtwcm9wcy5tb2RlXS5jb3VudGVyIH19c1xuICAgICAgICA8L3A+XG4gICAgICAgICA8cFxuICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgOmNsYXNzPVwiYHRleHQtbnYtJHtHZXRTdWZmaXgoJ2FjY2VudCcpfWBcIlxuICAgICAgICAgICAgdi1zaG93PVwic2hvd1NlbmRDb2RlXCJcbiAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXRvcDogLTEycHg7ICFpbXBvcnRhbnRcIlxuICAgICAgICAgICAgQGNsaWNrPVwiYWN0aXZlQ291bnRlclwiXG4gICAgICAgICAgICBjbGFzcz1cIndwLTEwMCB0ZXh0LXJpZ2h0IGZzLTEyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICB7eyAkdCgnY29kZVZhbGlkYXRpb24uc2VuZENvZGUnKSB9fVxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuXG5pbXBvcnQgeyBEYXJrLCBRSW5wdXQsIFNjcmVlbiB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBjb21wdXRlZCwgUHJvcFR5cGUsIHJlZiwgd2F0Y2hFZmZlY3QgfSBmcm9tICd2dWUnO1xuaW1wb3J0IEdldFN1ZmZpeCBmcm9tICcuLi9zaGFyZWQvaGVscGVycy9HZXRTdWZmaXgnO1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NTdG9yZSB9IGZyb20gJ3N0b3Jlcy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgcXRJbnB1dHM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiA2XG4gICAgfSxcbiAgICBzaG93U2VuZENvZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgY29kZTogU3RyaW5nLFxuICAgIG1vZGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nIGFzIFByb3BUeXBlPCdjb3VudGVyMkZBUGhvbmUnIHwgJ2NvdW50ZXIyRkFFbWFpbCc+LFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBkaXNhYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxufSk7XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0cyhbJ2FkZENvZGUnLCAncmVtb3ZlQ29kZScsICdzZW5kQ29kZSddKTtcblxuY29uc3Qgc2V0dGluZ3NTdG9yZSA9IHVzZVNldHRpbmdzU3RvcmUoKTtcbmNvbnN0IHNldHRpbmdzU3RvcmVSZWYgPSBzdG9yZVRvUmVmcyhzZXR0aW5nc1N0b3JlKTtcblxuY29uc3QgaW5wdXRzID0gcmVmPFFJbnB1dFtdPihbXSk7XG5cbmNvbnN0IHZhbHVlSW5wdXRzID0gcmVmPChzdHJpbmd8bnVsbClbXT4oW10pO1xuXG5pZiAoQm9vbGVhbihwcm9wcy5jb2RlKSAmJiBwcm9wcy5jb2RlKVxue1xuICAgIHZhbHVlSW5wdXRzLnZhbHVlID0gcHJvcHMuY29kZS50cmltKCkuc3BsaXQoJycpO1xufVxuXG5jb25zdCBpc01vYmlsZSA9IGNvbXB1dGVkKCgpID0+IFNjcmVlbi5sdC5tZCk7XG5cbmNvbnN0IG9uVXBkYXRlID0gKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+XG57XG4gICAgdmFsdWVJbnB1dHMudmFsdWVbaW5kZXhdID0gdmFsdWUubGVuZ3RoID4gMCA/IHZhbHVlIDogbnVsbDtcblxuICAgIGNvbnN0IGZvY3VzID0gKGk6IG51bWJlcikgPT5cbiAgICB7XG4gICAgICAgIGlmIChpbnB1dHMudmFsdWVbaV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0cy52YWx1ZVtpXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgICAgZm9jdXMoaW5kZXggKyAxKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgZm9jdXMoaW5kZXggLSAxKTtcbiAgICB9XG59O1xuXG5jb25zdCBvblBhc3RlID0gKGV2ZW50OiBhbnkpID0+XG57XG4gICAgY29uc3QgY29weSA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dCcpO1xuXG4gICAgaWYgKCFOdW1iZXIoY29weSkpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVDb3B5ID0gYCR7Y29weX1gLnJlcGxhY2VBbGwoJyAnLCAnJykudHJpbSgpLnNwbGl0KCcnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMucXRJbnB1dHM7IGkrKylcbiAgICB7XG4gICAgICAgIHZhbHVlSW5wdXRzLnZhbHVlW2ldID0gdmFsdWVDb3B5W2ldO1xuICAgIH1cbn07XG5cbndhdGNoRWZmZWN0KCgpID0+XG57XG4gICAgaWYgKHZhbHVlSW5wdXRzLnZhbHVlLmV2ZXJ5KHYgPT4gdikgJiYgdmFsdWVJbnB1dHMudmFsdWUubGVuZ3RoID09PSBwcm9wcy5xdElucHV0cylcbiAgICB7XG4gICAgICAgIGVtaXQoJ2FkZENvZGUnLCB2YWx1ZUlucHV0cy52YWx1ZS5maWx0ZXIodiA9PiB2KS50b1N0cmluZygpLnJlcGxhY2VBbGwoJywnLCAnJykpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBlbWl0KCdyZW1vdmVDb2RlJywgbnVsbCk7XG4gICAgfVxufSk7XG5cbmNvbnN0IGFjdGl2ZUNvdW50ZXIgPSAoKSA9Plxue1xuICAgIGlmIChwcm9wcy5tb2RlKVxuICAgIHtcbiAgICAgICAgc2V0dGluZ3NTdG9yZVJlZltwcm9wcy5tb2RlXS52YWx1ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzZXR0aW5nc1N0b3JlLkFjdGl2ZUNvdW50ZXIyRkEocHJvcHMubW9kZSwgNjApO1xuICAgICAgICBlbWl0KCdzZW5kQ29kZScpO1xuICAgIH1cbn07XG48L3NjcmlwdD5cbiIsImRlY2xhcmUgdHlwZSBBdXRoVHlwZSA9ICdlbWFpbCcgfCAncGhvbmUnIHwgJ2F1dGh5JztcblxuY29uc3QgRW5jb2RlVGV4dCA9ICh0ZXh0OiBzdHJpbmcsIHR5cGU6IEF1dGhUeXBlKTogc3RyaW5nID0+XG57XG4gICAgaWYgKHR5cGUgPT09ICdlbWFpbCcpXG4gICAge1xuICAgICAgICBjb25zdCBhdXggPSB0ZXh0LnNwbGl0KCdAJyk7XG4gICAgICAgIGNvbnN0IGF1eDIgPSBhdXhbMV0uc3BsaXQoJy4nKTtcbiAgICAgICAgcmV0dXJuIGF1eFswXVxuICAgICAgICAgICAgLnNsaWNlKDAsIDMpXG4gICAgICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgICAgIGF1eFswXVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMywgYXV4WzBdLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKCgpID0+ICcqJylcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvLC9nLCAnJyksXG4gICAgICAgICAgICAgICAgJ0AnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgICAgIGF1eDJbMF1cbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgICAgICAgICAubWFwKCgpID0+ICcqJylcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvLC9nLCAnJyksXG4gICAgICAgICAgICAgICAgJy4nLFxuICAgICAgICAgICAgICAgIGF1eDJbMV1cbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwaG9uZScpXG4gICAge1xuICAgICAgICByZXR1cm4gdGV4dC5zbGljZSgwLCA3KS5jb25jYXQoXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDcsIHRleHQubGVuZ3RoIC0gMilcbiAgICAgICAgICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgICAgICAgICAgLm1hcCgoKSA9PiAnKicpXG4gICAgICAgICAgICAgICAgLmpvaW4oKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8sL2csICcnKVxuICAgICAgICAgICAgICAgIC5jb25jYXQodGV4dC5zbGljZSh0ZXh0Lmxlbmd0aCAtIDIsIHRleHQubGVuZ3RoKSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbmNvZGVUZXh0O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJGQSxVQUFNLGdCQUFnQjtBQUNoQixVQUFBLG1CQUFtQixZQUFZLGFBQWE7QUFFNUMsVUFBQSxTQUFTLElBQWMsQ0FBQSxDQUFFO0FBRXpCLFVBQUEsY0FBYyxJQUFxQixDQUFBLENBQUU7QUFFM0MsUUFBSSxRQUFRLE1BQU0sSUFBSSxLQUFLLE1BQU0sTUFDakM7QUFDSSxrQkFBWSxRQUFRLE1BQU0sS0FBSyxPQUFPLE1BQU0sRUFBRTtBQUFBLElBQ2xEO0FBRUEsVUFBTSxXQUFXLFNBQVMsTUFBTSxPQUFPLEdBQUcsRUFBRTtBQUV0QyxVQUFBLFdBQVcsQ0FBQyxPQUFlLFVBQ2pDO0FBQ0ksa0JBQVksTUFBTSxTQUFTLE1BQU0sU0FBUyxJQUFJLFFBQVE7QUFFaEQsWUFBQSxRQUFRLENBQUMsTUFDZjtBQUNRLFlBQUEsT0FBTyxNQUFNLElBQ2pCO0FBQ1csaUJBQUEsTUFBTSxHQUFHLE1BQU07QUFBQSxRQUMxQjtBQUFBLE1BQUE7QUFHQSxVQUFBLE1BQU0sU0FBUyxHQUNuQjtBQUNJLGNBQU0sUUFBUSxDQUFDO0FBQUEsTUFBQSxPQUduQjtBQUNJLGNBQU0sUUFBUSxDQUFDO0FBQUEsTUFDbkI7QUFBQSxJQUFBO0FBR0UsVUFBQSxVQUFVLENBQUMsVUFDakI7QUFDSSxZQUFNLE9BQU8sTUFBTSxjQUFjLFFBQVEsTUFBTTtBQUUzQyxVQUFBLENBQUMsT0FBTyxJQUFJLEdBQ2hCO0FBQ0k7QUFBQSxNQUNKO0FBRU0sWUFBQSxZQUFZLEdBQUcsT0FBTyxXQUFXLEtBQUssRUFBRSxFQUFFLEtBQUEsRUFBTyxNQUFNLEVBQUU7QUFFL0QsZUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFVBQVUsS0FDcEM7QUFDZ0Isb0JBQUEsTUFBTSxLQUFLLFVBQVU7QUFBQSxNQUNyQztBQUFBLElBQUE7QUFHSixnQkFBWSxNQUNaO0FBQ1EsVUFBQSxZQUFZLE1BQU0sTUFBTSxDQUFLLE1BQUEsQ0FBQyxLQUFLLFlBQVksTUFBTSxXQUFXLE1BQU0sVUFDMUU7QUFDSSxhQUFLLFdBQVcsWUFBWSxNQUFNLE9BQU8sQ0FBSyxNQUFBLENBQUMsRUFBRSxTQUFBLEVBQVcsV0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLE1BQUEsT0FHbkY7QUFDSSxhQUFLLGNBQWMsSUFBSTtBQUFBLE1BQzNCO0FBQUEsSUFBQSxDQUNIO0FBRUQsVUFBTSxnQkFBZ0IsTUFDdEI7QUFDSSxVQUFJLE1BQU0sTUFDVjtBQUNxQix5QkFBQSxNQUFNLE1BQU0sTUFBTSxTQUFTO0FBQzlCLHNCQUFBLGlCQUFpQixNQUFNLE1BQU0sRUFBRTtBQUM3QyxhQUFLLFVBQVU7QUFBQSxNQUNuQjtBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLRSxNQUFBLGFBQWEsQ0FBQyxNQUFjLFNBQ2xDO0FBQ0ksTUFBSSxTQUFTLFNBQ2I7QUFDVSxVQUFBLE1BQU0sS0FBSyxNQUFNLEdBQUc7QUFDMUIsVUFBTSxPQUFPLElBQUksR0FBRyxNQUFNLEdBQUc7QUFDN0IsV0FBTyxJQUFJLEdBQ04sTUFBTSxHQUFHLENBQUMsRUFDVjtBQUFBLE1BQ0csSUFBSSxHQUNDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxFQUN0QixNQUFNLEVBQUUsRUFDUixJQUFJLE1BQU0sR0FBRyxFQUNiLE9BQ0EsUUFBUSxNQUFNLEVBQUU7QUFBQSxNQUNyQjtBQUFBLElBQUEsRUFFSDtBQUFBLE1BQ0csS0FBSyxHQUNBLE1BQU0sRUFBRSxFQUNSLElBQUksTUFBTSxHQUFHLEVBQ2IsS0FDQSxFQUFBLFFBQVEsTUFBTSxFQUFFO0FBQUEsTUFDckI7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUFBO0FBQUEsRUFDVCxXQUVDLFNBQVMsU0FDbEI7QUFDSSxXQUFPLEtBQUssTUFBTSxHQUFHLENBQUMsRUFBRTtBQUFBLE1BQ3BCLEtBQ0ssTUFBTSxHQUFHLEtBQUssU0FBUyxDQUFDLEVBQ3hCLE1BQU0sRUFBRSxFQUNSLElBQUksTUFBTSxHQUFHLEVBQ2IsT0FDQSxRQUFRLE1BQU0sRUFBRSxFQUNoQixPQUFPLEtBQUssTUFBTSxLQUFLLFNBQVMsR0FBRyxLQUFLLE1BQU0sQ0FBQztBQUFBLElBQUE7QUFBQSxFQUU1RDtBQUNPLFNBQUE7QUFDWDs7In0=
