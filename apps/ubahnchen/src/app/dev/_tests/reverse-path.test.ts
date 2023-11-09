/* eslint-disable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call */

// @ts-ignore
import { default as svgPathReverse } from 'svg-path-reverse'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { reverseNormalized, normalize } = svgPathReverse

describe('svg-path-reverse', () => {
  it('U2', () => {
    expect(
      normalize(
        ' M220.823 454.78L292.434 526.392C299.108 533.065 306.581 532.205 306.581 532.205H552.209C561.334 532.205 566.348 538.033 566.348 538.033L618.463 590.149C618.463 590.149 623.728 596.019 632.634 596.019H700.777C700.777 596.019 707.973 595.863 713.574 601.461L751.771 639.659C751.771 639.659 756.948 645.523 765.885 645.523C774.823 645.523 779.573 640.148 780.073 639.648C780.573 639.148 785.885 634.335 785.885 625.523C785.885 621.818 785.973 611.868 785.973 611.909L785.886 607.91V547.971C785.886 547.971 785.631 539.922 791.724 533.828C797.818 527.735 804.849 527.954 805.912 527.954H899.329H884.041H927.772C927.772 527.954 935.752 528.28 941.877 522.154L1064.35 399.681C1064.35 399.681 1070.18 394.54 1070.18 385.569V256.029',
      ),
    )
  })
  it('U7', () => {
    expect(
      reverseNormalized(
        normalize(
          'M685.089 719.286h53.548s7.647.613 14.127-5.867l76.421-76.421s5.06-5.848 14.164-5.848c0 0 7.834-.418 14.146 5.895 6.313 6.312 57.403 57.756 57.403 57.756s4.889 5.827 14.139 5.826h128.393s7.79-.504 14.13 5.84c6.35 6.344 256.42 256.414 256.42 256.414',
        ),
      ),
    ).toBe(
      'M 1327.9800000000002 962.881 C 1327.9800000000002 962.881 1077.91 712.811 1071.5600000000002 706.467 C 1065.22 700.1229999999999 1057.43 700.627 1057.43 700.627 L 929.037 700.627 C 919.787 700.6279999999999 914.898 694.8009999999999 914.898 694.8009999999999 C 914.898 694.8009999999999 863.808 643.357 857.495 637.045 C 851.183 630.732 843.349 631.15 843.349 631.15 C 834.245 631.15 829.1850000000001 636.9979999999999 829.1850000000001 636.9979999999999 L 752.764 713.419 C 746.2840000000001 719.899 738.6370000000001 719.286 738.6370000000001 719.286 L 685.089 719.286 ',
    )
    expect(
      normalize(
        'L711.521 719.273h-232.68s-7.744.57-14.174-5.861l-24.587-24.587s-5.893-4.988-5.893-14.176V430.967s.463-7.789-5.812-14.065c-6.276-6.275-12.551-5.922-14.23-5.922H75.44',
      ),
    ).toBe(
      'M 5080.24 1447.523 L 4847.5599999999995 1447.523 C 4847.5599999999995 1447.523 4839.816 1448.0929999999998 4833.3859999999995 1441.663 L 4808.798999999999 1417.075 C 4808.798999999999 1417.075 4802.904999999999 1412.087 4802.904999999999 1402.8990000000001 L 4802.904999999999 1159.217 C 4802.904999999999 1159.217 4803.368999999999 1151.4270000000001 4797.093999999999 1145.152 C 4790.817999999999 1138.877 4784.5419999999995 1139.23 4782.864 1139.23 L 4444.159 1139.23',
    )
    expect(1).toBe(1)
  })

  it('U8', () => {
    expect(
      reverseNormalized(
        normalize(
          'M715.367 27.837V106.4s-.574 7.641 5.863 14.078l100.245 100.245',
        ),
      ),
    ).toBe(
      'M 5190.194 948.972 L 5089.9490000000005 848.727 C 5083.512000000001 842.289 5084.086 834.649 5084.086 834.649 L 5084.086 756.087 ',
    )
  })
  it('U9', () => {
    expect(
      normalize(
        'L579.209 606.344V473.239s-.662-7.635 5.834-14.131L822.94 221.211',
      ),
    ).toBe(
      'L 4947.928 1334.594 L 4947.928 1201.489 C 4947.928 1201.489 4947.265 1193.854 4953.762 1187.358 L 5191.659 949.4599999999999',
    )
  })
})