import React from 'react'
import ProfileStatus from './ProfileStatus'
import { create } from 'react-test-renderer'

describe('ProfileStatus Component testing',()=>{
    test("status should be in state",()=>{
        const component = create(<ProfileStatus status="NEW TEST STATUS"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("NEW TEST STATUS")
    })
    test("span should contain state.status",()=>{
        const component = create(<ProfileStatus status="NEW TEST STATUS"/>)
        let root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe("NEW TEST STATUS")
    })
    test("create <input> after doubleClick on <span>",()=>{
        const component = create(<ProfileStatus status="NEW TEST STATUS"/>)
        let root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        expect(input.props.defaultValue).toBe("NEW TEST STATUS")
    })
    test("onSubmit should be called one ",()=>{
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status = "" putUserStatus={mockCallback}/>)
        let root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        input.props.onBlur();
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})