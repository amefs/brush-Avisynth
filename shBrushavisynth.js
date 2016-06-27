/*

    Third part brush for SyntaxHighlighter

    Language:Avisynth

    Usage
        [code lang="avs"][/code]
        [code lang="avisynth"][/code]

    This Script including most of the popluar functions and scripts used in avisynth.

    For Further information please visit http://avisynth.nl/

    27.06.2016

*/

;(function()

{

	// CommonJS

	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush() {
    // Contributed by Amefs

  var special = 'try cache function global return ' +
    'true yes false no __END__ ';

  var core = '' +
    'AviSource AviFileSource AddBorders AlignedSplice AssumeFPS AssumeScaledFPS ' +
    'AssumeFrameBased AssumeFieldBased AssumeBFF AssumeTFF Amplify AmplifydB ' +
    'AssumeSampleRate AudioDub AudioDubEx Animate ApplyRange ' +
    'BicubicResize BilinearResize BlackmanResize Blur Bob BlankClip Blackness ' +
    'ColorYUV ConvertBackToYUY2 ConvertToRGB ConvertToRGB24 ConvertToRGB32 ' +
    'ConvertToYUY2 ConvertToY8 ConvertToYV411 ConvertToYV12 ConvertToYV16 ConvertToYV24 ' +
    'ColorKeyMask Crop CropBottom ChangeFPS ConvertFPS ComplementParity ConvertAudioTo8bit ' +
    'ConvertAudioTo16bit ConvertAudioTo24bit ConvertAudioTo32bit ConvertAudioToFloat ConvertToMono ' +
    'ConditionalFilter ConditionalReader ColorBars Compare ' +
    'DirectShowSource DeleteFrame Dissolve DuplicateFrame DoubleWeave DelayAudio ' +
    'EnsureVBRMP3Sync ' +
    'FixLuminance FlipHorizontal FlipVertical FixBrokenChromaUpsampling FadeIn0 FadeIn ' +
    'FadeIn2 FadeOut0 FadeOut FadeOut2 FadeIO0 FadeIO FadeIO2 FreezeFrame FrameEvaluate ' +
    'GreyScale GaussResize GeneralConvolution GetChannel GetLeftChannel GetRightChannel ' +
    'HorizontalReduceBy2 Histogram ' +
    'ImageReader ImageSource ImageWriter Invert Interleave Info ' +
    'KillAudio KillVideo ' +
    'Levels Limiter Layer Letterbox LanczosResize Lanczos4Resize Loop ' +
    'MergeARGB MergeRGB MergeChroma MergeLuma Merge Mask MaskHS MergeChannels MixAudio ' +
    'MonoToStereo MessageClip ' +
    'Normalize ' +
    'OpenDMLSource Overlay ' +
    'PointResize PeculiarBlend Pulldown ' +
    'RGBAdjust ResetMask Reverse ResampleAudio ReduceBy2 ' +
    'SegmentedAviSource SegmentedDirectShowSource SoundOut ShowAlpha ShowRed ShowGreen ' +
    'ShowBlue SwapUV Subtract SincResize Spline16Resize Spline36Resize Spline64Resize ' +
    'SelectEven SelectOdd SelectEvery SelectRangeEvery Sharpen SpatialSoften SeparateFields ' +
    'ShowFiveVersions ShowFrameNumber ShowSMPTE ShowTime StackHorizontal StackVertical Subtitle ' +
    'SwapFields SuperEQ SSRC ScriptClip ' +
    'Tweak TurnLeft TurnRight Turn180 TemporalSoften TimeStretch TCPServer TCPSource Trim ' +
    'Tone ' +
    'UtoY8 UtoY UnalignedSplice ' +
    'VtoY8 VtoY VerticalReduceBy2 Version ' +
    'WavSource Weave WriteFile WriteFileIf WriteFileStart WriteFileEnd YToUV ';

  var Script= 'Abs Apply Assert AverageLuma AverageChromaU AverageChromaV ' +
    'Ceil Cos Chr ChromaUDifference ChromaVDifference ' +
    'Defined Default ' +
    'Exp Exist Eval ' +
    'Floor Frac Float Findstr GetMTMode ' +
    'HexValue ' +
    'Int IsBool IsClip IsFloat IsInt IsString Import ' +
    'LoadPlugin Log LCase LeftStr LumaDifference LoadVirtualDubPlugin LoadVFAPIPlugin ' +
    'LoadCPlugin Load_Stdcall_Plugin ' +
    'Max MulDiv MidStr ' +
    'NOP ' +
    'OPT_AllowFloatAudio OPT_UseWaveExtensible ' +
    'Pi Pow ' +
    'Round Rand RevStr RightStr RGBDifference RGBDifferenceFromPrevious RGBDifferenceToNext ' +
    'Sin Sqrt Sign Spline StrLen String Select SetMemoryMax SetWorkingDir SetMTMode ' +
    'SetPlanarLegacyAlignment ' +
    'Time ' +
    'UCase UDifferenceFromPrevious UDifferenceToNext UPlaneMax UPlaneMin UPlaneMedian ' +
    'UPlaneMinMaxDifference ' +
    'Value VersionNumber VersionString VDifferenceFromPrevious VDifferenceToNext VPlaneMax ' +
    'VPlaneMin VPlaneMedian VPlaneMinMaxDifference ' +
    'YDifferenceFromPrevious YDifferenceToNext YPlaneMax YPlaneMin YPlaneMedian ' +
    'YPlaneMinMaxDifference';

  var plugins = 'AddGrain AddGrainC DSS2 avstp_set_threads ' +
    'aBlur aSobel aWarp aWarp4 aWarpSharp aWarpSharp2 ' +
    'ColorMatrix Convolution3D DctAddConstant DctFilterD DctFilter ' +
    'Deblock Decimate FieldDeinterlace IsCombed Telecide ' +
    'dfttest BlindPP LumaYV12 MPEG2Source ' +
    'Dither_add16 Dither_bilateral16 Dither_box_filter16 Dither_limit_dif16 ' +
    'Dither_max_dif16 Dither_median16 Dither_merge16 Dither_out ' +
    'Dither_removegrain16 Dither_repair16 Dither_resize16 Dither_sub16 ' +
    'ditherpost ditherBuildMask SmoothGrad EEDI2 imp_EEDI2 eedi3 eedi3_rpow2 ' +
    'FFAudioSource FFGetLogLevel FFGetVersion FFIndex FFSetLogLevel ' +
    'FFVideoSource SWScale FFT3DFilter FFT3DGPU FillMargins ' +
    'f3kdb f3kdb_dither flash3kyuu_deband FluxSmoothST FluxSmoothT ' +
    'gradfun2db JpegSource KNLMeansCL LeakKernelBob LeakKernelDeint ' +
    'LSMASHAudioSource LSMASHVideoSource LWLibavAudioSource LWLibavVideoSource ' +
    'mt_adddiff mt_average mt_binarize mt_cricle mt_clamp mt_convolution ' +
    'mt_deflate mt_dimond mt_edge mt_ellipse mt_expand mt_freeellipse ' +
    'mt_freelosange mt_freerectangle mt_gradient mt_hysteresis mt_infix mt_inflate ' +
    'mt_inpand mt_invert mt_logic mt_losange mt_lut mt_lutf mt_luts mt_lutspa ' +
    'mt_lutsx mt_lutxy mt_lutxyz mt_makediff mt_mappedblur mt_merge mt_motion ' +
    'mt_polish mt_rectangle mt_square medianBlur medianBlurb medianBlurcw medianBlurt ' +
    'ml3dex MipSmooth MP_Pipeline MPP_SharedMemoryClient MPP_SharedMemoryServer ' +
    'SelectThunkEvery ThunkedInterleave MSharpen nnedi3 nnedi3_rpow2 RemoveGrain Repair ' +
    'RSharpen SangNom SangNom2 tcanny tdrans Gblur TCannyMod ' +
    'TDecimate TFM TMM UnDot MaskSub TextSub TextSubSwapUV VobSub'
    'Yadif';

  var custom = 'BitDepth C16 CSmod16_ CSmod DeRainbow DeRainbowYUV2 ' +
    'Dither_add_grain16 Dither_addborders16 Dither_build_gf3_range_mask ' +
    'Dither_convert_8_to_16 Dither_convert_rgb_to_yuv Dither_convert_yuv_to_rgb' +
    'Dither_crop16 Dither_expr_part Dither_lut16 Dither_lut16_expr Dither_lut8 ' +
    'Dither_lutxy8 Dither_lutxyz8 Dither_max Dither_merge16_8 Dither_min ' +
    'Dither_resize16nr Dither_y_to_uv Down10 MinBlur MinBlur16 ' +
    'nnedi3_resize16 nnedi3_resize16_Down8 nnedi3_resize16_U16 QTGMC ' +
    'sbr sbr16 SMDegrain taa taaMod ' +
    'U16';


  this.regexList = [
    { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
    { regex: /^\s*@\w+/gm,                                      css: 'decorator' },
    { regex: /(['\"]{3})([^\1])*?\1/gm,                         css: 'comments' },
    { regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm,                  css: 'string' },
    { regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,                css: 'string' },
    { regex: /\+|\-|\*|\/|\%|=|==/gm,                           css: 'keyword' },
    { regex: /\b\d+\.?\w*/g,                                    css: 'value' },

    { regex: new RegExp(this.getKeywords(core), 'gm'),          css: 'constants bold' },

    { regex: new RegExp(this.getKeywords(Script), 'gm'),        css: 'keyword' },

    { regex: new RegExp(this.getKeywords(plugins), 'gm'),       css: 'functions bold' },

    { regex: new RegExp(this.getKeywords(custom), 'gm'),        css: 'color3 bold' }
    
    ];
};


	Brush.prototype	= new SyntaxHighlighter.Highlighter();

	Brush.aliases	= ['avs', 'avisynth'];

	SyntaxHighlighter.brushes.Avisynth = Brush;

	// CommonJS

	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;



})();



