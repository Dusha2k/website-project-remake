import NotificationStore from '../store/NotificationStore'

export const handler = (target: Object, propertyKey: string, descriptor?: PropertyDescriptor): any => {
  const fn = descriptor!.value

  return {
    ...descriptor,
    async value(...args: any[]) {
      let result

      try {
        NotificationStore.toggleLoading(propertyKey)
        result = await fn.call(this, ...args)
      } catch (error) {
        console.log('yee', error)
      } finally {
        NotificationStore.toggleLoading(propertyKey)
      }

      return result
    },
  }
}
