# 嵌入字体说明

本成品在 WebAssembly wrapper 中嵌入了一个裁剪的 **Noto Sans SC Regular** 字体，用于 TellerPack egui Canvas 的中文显示。

## 来源

- 项目：Noto CJK（Noto Sans SC）
- 官方仓库：`https://github.com/notofonts/noto-cjk`
- 原字体下载：`https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/SubsetOTF/SC/NotoSansSC-Regular.otf`
- 获取日期：2026-10-18（Australia/Sydney）
- 原字体大小：8,331,336 bytes
- 原字体 SHA-256：`faa6c9df652116dde789d351359f3d7e5d2285a2b2a1f04a2d7244df706d5ea9`
- 许可证：SIL Open Font License 1.1（见 `OFL-NotoSansSC.txt`）
- 许可证来源：`https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/LICENSE`
- 许可证 SHA-256：`6a73f9541c2de74158c0e7cf6b0a58ef774f5a780bf191f2d7ec9cc53efe2bf2`

## 裁剪

使用 `fontTools` 的 `pyftsubset` 裁剪，保留：

- 原任务源码中出现的全部非 ASCII 字符和可打印 ASCII；
- 常用 GB2312 字符集（用于一般中文输入）；
- 共 6,876 个字符码点（去重后）。

裁剪文件：`NotoSansSC-Preview.otf`  
大小：1,837,752 bytes  
SHA-256：`6ae1ec9da0aa6398d8adbe1097febfba62151f2846daf80dffab99667a5e3115`

裁剪字体已嵌入 `site/gui/rwp_eframe_web_wrapper_bg.wasm`，运行时不单独加载字体文件。

## 边界

- 本成品没有嵌入或分发 Windows 系统字体（如微软雅黑）。
- 裁剪字体不能保证覆盖所有生僻字；如果输入的字形不在覆盖范围内，Canvas 中可能显示方框。
- 字体按 OFL 1.1 分发；不得单独将本字体作为字体产品销售。
