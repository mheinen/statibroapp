import { async, TestBed } from '@angular/core/testing';
import { LessonsComponent } from './lessons.component';
describe('LessonsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LessonsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LessonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=G:/Projekte/statibroapp/client/src/app/lessons/lessons.component.spec.js.map