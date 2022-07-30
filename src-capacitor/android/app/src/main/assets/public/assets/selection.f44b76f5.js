import { aG as Platform } from "./index.f0dfeb9e.js";
const modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true
};
const directionList = Object.keys(modifiersAll);
modifiersAll.all = true;
function getModifierDirections(mod) {
  const dir = {};
  for (const direction of directionList) {
    if (mod[direction] === true) {
      dir[direction] = true;
    }
  }
  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }
  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  } else if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true;
  } else if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }
  return dir;
}
function shouldStart(evt, ctx) {
  return ctx.event === void 0 && evt.target !== void 0 && evt.target.draggable !== true && typeof ctx.handler === "function" && evt.target.nodeName.toUpperCase() !== "INPUT" && (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1);
}
function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection();
    if (selection.empty !== void 0) {
      selection.empty();
    } else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      Platform.is.mobile !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    document.selection.empty();
  }
}
export { clearSelection as c, getModifierDirections as g, shouldStart as s };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmY0NGI3NmY1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3RvdWNoLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9kaWZpZXJzQWxsID0ge1xuICBsZWZ0OiB0cnVlLFxuICByaWdodDogdHJ1ZSxcbiAgdXA6IHRydWUsXG4gIGRvd246IHRydWUsXG4gIGhvcml6b250YWw6IHRydWUsXG4gIHZlcnRpY2FsOiB0cnVlXG59XG5cbmNvbnN0IGRpcmVjdGlvbkxpc3QgPSBPYmplY3Qua2V5cyhtb2RpZmllcnNBbGwpXG5cbm1vZGlmaWVyc0FsbC5hbGwgPSB0cnVlXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RpZmllckRpcmVjdGlvbnMgKG1vZCkge1xuICBjb25zdCBkaXIgPSB7fVxuXG4gIGZvciAoY29uc3QgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbkxpc3QpIHtcbiAgICBpZiAobW9kWyBkaXJlY3Rpb24gXSA9PT0gdHJ1ZSkge1xuICAgICAgZGlyWyBkaXJlY3Rpb24gXSA9IHRydWVcbiAgICB9XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZGlyKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzQWxsXG4gIH1cblxuICBpZiAoZGlyLmhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICBkaXIubGVmdCA9IGRpci5yaWdodCA9IHRydWVcbiAgfVxuICBlbHNlIGlmIChkaXIubGVmdCA9PT0gdHJ1ZSAmJiBkaXIucmlnaHQgPT09IHRydWUpIHtcbiAgICBkaXIuaG9yaXpvbnRhbCA9IHRydWVcbiAgfVxuXG4gIGlmIChkaXIudmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIudXAgPSBkaXIuZG93biA9IHRydWVcbiAgfVxuICBlbHNlIGlmIChkaXIudXAgPT09IHRydWUgJiYgZGlyLmRvd24gPT09IHRydWUpIHtcbiAgICBkaXIudmVydGljYWwgPSB0cnVlXG4gIH1cblxuICBpZiAoZGlyLmhvcml6b250YWwgPT09IHRydWUgJiYgZGlyLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyLmFsbCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBkaXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFN0YXJ0IChldnQsIGN0eCkge1xuICByZXR1cm4gY3R4LmV2ZW50ID09PSB2b2lkIDBcbiAgICAmJiBldnQudGFyZ2V0ICE9PSB2b2lkIDBcbiAgICAmJiBldnQudGFyZ2V0LmRyYWdnYWJsZSAhPT0gdHJ1ZVxuICAgICYmIHR5cGVvZiBjdHguaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIGV2dC50YXJnZXQubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0lOUFVUJ1xuICAgICYmIChldnQucUNsb25lZEJ5ID09PSB2b2lkIDAgfHwgZXZ0LnFDbG9uZWRCeS5pbmRleE9mKGN0eC51aWQpID09PSAtMSlcbn1cbiIsImltcG9ydCBQbGF0Zm9ybSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24gKCkge1xuICBpZiAod2luZG93LmdldFNlbGVjdGlvbiAhPT0gdm9pZCAwKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHNlbGVjdGlvbi5lbXB0eSAhPT0gdm9pZCAwKSB7XG4gICAgICBzZWxlY3Rpb24uZW1wdHkoKVxuICAgIH1cbiAgICBlbHNlIGlmIChzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzICE9PSB2b2lkIDApIHtcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgUGxhdGZvcm0uaXMubW9iaWxlICE9PSB0cnVlICYmIHNlbGVjdGlvbi5hZGRSYW5nZShkb2N1bWVudC5jcmVhdGVSYW5nZSgpKVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gIT09IHZvaWQgMCkge1xuICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxlQUFlO0FBQUEsRUFDbkIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsSUFBSTtBQUFBLEVBQ0osTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUNaO0FBRUEsTUFBTSxnQkFBZ0IsT0FBTyxLQUFLLFlBQVk7QUFFOUMsYUFBYSxNQUFNO0FBRVosU0FBUyxzQkFBdUIsS0FBSztBQUMxQyxRQUFNLE1BQU0sQ0FBRTtBQUVkLGFBQVcsYUFBYSxlQUFlO0FBQ3JDLFFBQUksSUFBSyxlQUFnQixNQUFNO0FBQzdCLFVBQUssYUFBYztBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUVELE1BQUksT0FBTyxLQUFLLEdBQUcsRUFBRSxXQUFXLEdBQUc7QUFDakMsV0FBTztBQUFBLEVBQ1I7QUFFRCxNQUFJLElBQUksZUFBZSxNQUFNO0FBQzNCLFFBQUksT0FBTyxJQUFJLFFBQVE7QUFBQSxFQUN4QixXQUNRLElBQUksU0FBUyxRQUFRLElBQUksVUFBVSxNQUFNO0FBQ2hELFFBQUksYUFBYTtBQUFBLEVBQ2xCO0FBRUQsTUFBSSxJQUFJLGFBQWEsTUFBTTtBQUN6QixRQUFJLEtBQUssSUFBSSxPQUFPO0FBQUEsRUFDckIsV0FDUSxJQUFJLE9BQU8sUUFBUSxJQUFJLFNBQVMsTUFBTTtBQUM3QyxRQUFJLFdBQVc7QUFBQSxFQUNoQjtBQUVELE1BQUksSUFBSSxlQUFlLFFBQVEsSUFBSSxhQUFhLE1BQU07QUFDcEQsUUFBSSxNQUFNO0FBQUEsRUFDWDtBQUVELFNBQU87QUFDVDtBQUVPLFNBQVMsWUFBYSxLQUFLLEtBQUs7QUFDckMsU0FBTyxJQUFJLFVBQVUsVUFDaEIsSUFBSSxXQUFXLFVBQ2YsSUFBSSxPQUFPLGNBQWMsUUFDekIsT0FBTyxJQUFJLFlBQVksY0FDdkIsSUFBSSxPQUFPLFNBQVMsWUFBYSxNQUFLLFlBQ3JDLElBQUksY0FBYyxVQUFVLElBQUksVUFBVSxRQUFRLElBQUksR0FBRyxNQUFNO0FBQ3ZFO0FDcERPLFNBQVMsaUJBQWtCO0FBQ2hDLE1BQUksT0FBTyxpQkFBaUIsUUFBUTtBQUNsQyxVQUFNLFlBQVksT0FBTyxhQUFjO0FBQ3ZDLFFBQUksVUFBVSxVQUFVLFFBQVE7QUFDOUIsZ0JBQVUsTUFBTztBQUFBLElBQ2xCLFdBQ1EsVUFBVSxvQkFBb0IsUUFBUTtBQUM3QyxnQkFBVSxnQkFBaUI7QUFDM0IsZUFBUyxHQUFHLFdBQVcsUUFBUSxVQUFVLFNBQVMsU0FBUyxhQUFhO0FBQUEsSUFDekU7QUFBQSxFQUNGLFdBQ1EsU0FBUyxjQUFjLFFBQVE7QUFDdEMsYUFBUyxVQUFVLE1BQU87QUFBQSxFQUMzQjtBQUNIOzsifQ==
