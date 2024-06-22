import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    [attr.width]="size()[0]"
    [attr.height]="size()[1]"
    viewBox="0 0 33.866666 33.866666"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <defs id="defs2" />
    <g id="layer1">
      <path
        id="path1072-0"
        style="fill:currentColor;fill-opacity:1;stroke:none;stroke-width:2.5967"
        d="M 33.336587,20.235903 C 32.140595,25.510324 21.06655,33.832349 15.792132,32.636357 10.517712,31.440366 7.2114919,26.195061 8.4074841,20.920641 9.6034749,15.646222 14.725143,13.868993 20.123201,13.535996 28.260016,13.03405 34.532579,14.961484 33.336587,20.235903 Z M 17.871099,1.1143112 c -2.236776,0.00505 -4.883059,0.4682983 -7.694941,1.2908678 -5.1907746,1.5184752 -9.79273491,4.384418 -9.79273491,9.792735 0,4.320048 2.79781361,7.986693 6.68000021,9.287403 0.017903,-0.627102 0.09612,-1.261236 0.2400993,-1.896196 1.1959907,-5.274419 6.3176104,-7.051793 11.7156674,-7.384791 1.131189,-0.06978 2.224274,-0.09076 3.268345,-0.06417 1.375683,-2.224734 2.256612,-4.4272692 2.256612,-6.1227982 0,-3.4647028 -2.685752,-4.9120556 -6.673048,-4.9030506 z"
      />
    </g>
  </svg>`,
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  size = input.required<[width: number, height: number]>();
}
